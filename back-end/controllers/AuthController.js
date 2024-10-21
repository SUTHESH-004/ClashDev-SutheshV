import UserModel from "../models/userModel.js";

export const addUser = async (req, res) => {
  try {
    console.log("User added");
    const { username, email, password } = req.  body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields required",
        body: { username, password, email },
      });
    }
    console.log(req.body);
    const newUser = new UserModel({ username, password, email });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User Created Successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
    console.log(error);
  }
};

export const SignIn = async (req, res) => {
  try {
    console.log("user signed in");
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).json({
        message: "All fields required",
        success: false,
        body: { name, password },
      });
    } else {
      const user = UserModel.findOne({ email });
      if (!user) {
        return res.status(400).json({
          message: "passwords didn't match",
          success: false,
        });
      } else {
        return res.status(200).json({
          messgae: "passwords matched success",
          success: true,
        });
      }
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: `internal error${error}`, success: false });
  }
};
