import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import passport from "passport";
import cookieParser from "cookie-parser";
import affirmationRouter from "./routes/affirmationRouter.js";
import mediatationRouter from "./routes/meditationRouter.js";
import userRoutes from "./routes/userRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { configureJwtStrategy } from "./routes/passport-config.js";
import fileRoutes from "./routes/fileRoutes.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url); // get the current file location of server.js
const __dirname = dirname(__filename); //extract directory from that location.

dotenv.config();

const app = express();
app.use(
  cors({
    credentials: true, //Access-Control-Allow-Credentials true (we allow credentials to be sent)
    origin: true, //Access-Control-Allow-Origin *
  })
);
app.use(express.json());
app.use(cookieParser());

configureJwtStrategy(passport);

app.use(express.urlencoded({ extended: true }));

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

app.use("/api/affirmations", affirmationRouter);
app.use("/api/meditations", mediatationRouter);
app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/files", fileRoutes);
//serve our files statically
app.use(express.static(path.join(__dirname, "../build")));
//any other request made serve the index.html of our production build frontend.
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});
// app.all("*", (req, res) => {
//   return res.status(StatusCodes.NOT_FOUND).json({ message: "Invalid path" });
// });

app.listen(5005, () => {
  console.log("The server is listening for requests....");
});
