import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    httpOnly: true, // this makes the cookie accessible only to the http not via js , this prevents attack XSS
    secure: process.env.NODE_ENV === "production",
    // in production in we will have https
    sameSite: "strict", // this will prevent from attack csrf
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  return token;
};

