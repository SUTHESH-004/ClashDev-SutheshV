import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  UID: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
