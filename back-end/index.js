import express from "express";
import { connectDb } from "./db/connectDB.js";
import dotenv from "dotenv";
import AuthRoute from "./routes/AuthRoute.js";

const app = express();
dotenv.config(); 
// dotenv is important because we can't pass env as String // need furthor clarification
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
// allows us to parse incoming requests with json payloads

app.get("/", (req, res) => {
  res.send("Hello world 123");
});

app.use("/api/auth", AuthRoute);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectDb();
});
