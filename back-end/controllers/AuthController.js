import UserModel from "../models/userModel.js";

export const addUser = async (req, res) => {
  try {
    console.log("User added");
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields required",
        body: { username, password, email },
      });
    }
    console.log(req.body);
    const newUser = new UserModel({ username, password, email });
    await newUser.save();
    req
      .status(201)
      .json({ message: "User Created Successfully", user: newUser });
  } catch (error) {
    req.status(500).json({ message: "Server error", error: error.message });
  }
};
