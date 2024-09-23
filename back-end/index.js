import express from "express";
import { connectDb } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config(); // dotenv is important because we can't pass env as String // need furthor clarification
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello world 123");
});
app.use(express.json()); // allows us to parse incoming requests with json payloads

app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectDb();
});

// icecream10
