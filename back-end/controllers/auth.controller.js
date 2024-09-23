import crypto from "crypto";
import bcrypt from "bcrypt";

import { UserModel } from "../models/UserModel.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../MailTrap/email.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }
    const userAlreadyExists = await UserModel.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const verificationToken = Math.floor(
      10000 + Math.random() * 900000
    ).toString();

    const user = new UserModel({
      email,
      password: hashPassword,
      name,
      verificationToken: verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hrs
    });
    await user.save();

    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
  //   res.send("signup route");
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    const user = await UserModel.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired Verification code",
      });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();
    await sendWelcomeEmail(user.email, user.name);
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log(`error happened ${error}`);
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials : email doesn't match",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials : password doesn't match",
      });
    }
    generateTokenAndSetCookie(res, user._id);
    user.lastlogin = new Date();
    await user.save();
    res.status(200).json({
      success: true,
      message: "Logged in Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: "Internal error" });
  }
};
export const logout = async (req, res) => {
  console.log(res);
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Logged Out successfully",
  });
};
export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "User email not found",
      });
    }
    // generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;

    await user.save();

    //send email
    await sendPasswordResetEmail(
      user.email,
      `${process.env.CLIENT_URL}/reset-password/${resetToken}`
    );
    res.status(200).json({
      success: true,
      message: "password reset link sent to your email",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Internal error",
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    console.log(req.params);
    const { token } = req.params;
    const { password } = req.body;
    const user = await UserModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });
    console.log(user);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired reset token",
      });
    }
    // updatePassword
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();
    await sendResetSuccessEmail(user.email);
    res
      .status(200)
      .json({ success: true, message: "Password reset successfull" });
  } catch (error) {
    console.log("error in resetPassword", error);
    res.status(400).json({ success: false, message: errorMonitor.message });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId); // add .select("-password"); to remove password from returning
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: " User not found" });
    }
    res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        password: undefined, // if you don't want to put these see findById(req.useId)
      },
    });
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
