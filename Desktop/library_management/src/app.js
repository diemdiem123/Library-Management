import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/database";
dotenv.config();

const app = express();
app.use(express.json());
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
