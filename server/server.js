import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import multer from "multer";
import grid from "gridfs-stream";
import { GridFsStorage } from "multer-gridfs-storage";
import fs from "fs";
import { StatusCodes } from "http-status-codes";
import affirmationRouter from "./routes/affirmationRouter.js";
import mediatationRouter from "./routes/meditationRouter.js";
import userRoutes from "./routes/userRoutes.js";

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
app.use("/api/user", userRoutes);

// Create GridFS storage instance
const storage = new GridFsStorage({
  url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
  file: (req, file) => {
    return {
      filename: file.originalname,
    };
  },
});

// Create multer middleware for file upload
const upload = multer({ storage });

// Route for file upload
app.post("/upload", upload.single("audio"), (req, res) => {
  res.json({ message: "File uploaded successfully" });
});
// Get the MongoDB connection and create GridFS stream
const conn = mongoose.connection;
grid.mongo = mongoose.mongo;
const gfs = grid(conn);

// Save the file using GridFS
app.post("/upload", upload.single("audio"), (req, res) => {
  const { file } = req;

  // Create write stream
  const writeStream = gfs.createWriteStream({
    filename: file.originalname,
    metadata: {
      // Add any additional metadata
    },
  });

  // Pipe the file stream to GridFS

  // Pipe the file stream to GridFS
  fs.createReadStream(file.path).pipe(writeStream);

  // Remove the temporary file
  fs.unlink(file.path, (error) => {
    if (error) {
      console.error("Error removing temporary file:", error);
    }
  });

  res.json({ message: "File uploaded successfully" });
});

app.all("*", (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({ message: "Invalid path" });
});

app.listen(5005, () => {
  console.log("The server is listening for requests....");
});
