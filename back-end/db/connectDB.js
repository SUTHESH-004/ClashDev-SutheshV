import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo Db connnected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connection to MongoDB", error);
    process.exit(1);
  }
};
