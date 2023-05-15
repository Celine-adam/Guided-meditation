import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import affirmationRouter from "./routes/affirmationRouter.js";
dotenv.config();

const app = express();
app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });
app.use(cors());
app.use("/api/affirmation", affirmationRouter);
app.all("*", (req, res) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Invalid path");
});

app.listen(5005, () => {
  console.log("The server is listening for requests....");
});
