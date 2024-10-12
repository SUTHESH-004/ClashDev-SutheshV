import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  UID: {
    type: String,
    unique: true,
    required: false,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  },
  upvotesReceived: {
    type: Number,
    default: 0,
  },
  upvotesGiven: {
    type: Number,
    default: 0,
  },
  badges: [
    {
      type: String,
    },
  ],
  roles: {
    type: String,
    enum: ["user", "moderator", "admin"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
