import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connect success");
  } catch (error) {
    console.log("connect fail", error.message);
    process.exit(1);
  }
};
