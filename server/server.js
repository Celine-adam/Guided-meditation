import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import affirmationRouter from "./routes/affirmationRouter.js";
import mediatationRouter from "./routes/meditationRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

app.use(cors());
app.use("/api/affirmations", affirmationRouter);
app.use("/api/meditations", mediatationRouter);

app.all("*", (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({ message: "Invalid path" });
});

app.listen(5005, () => {
  console.log("The server is listening for requests....");
});
