import express from "express";
import multer from "multer";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import { getFileById, uploadFile } from "../controllers/fileController.js";
const __filename = fileURLToPath(import.meta.url); // get the current file location of server.js
const __dirname = dirname(__filename); //extract directory from that location.
const router = express.Router();
//configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //where to store the file
    cb(null, path.join(__dirname, "../uploads"));
  },

  //name of the file
  filename: (req, file, cb) => {
    console.log("mimetype file", file.mimetype);
    const ext = file.mimetype.split("/")[1];
    const originalNameNoExtension = file.originalname.split(".")[0];

    cb(null, `${originalNameNoExtension}-${Date.now()}.${ext}`);
  },
});
const upload = multer({ storage: storage });

router.post("/create", upload.single("image"), uploadFile);
router.get("/byid/:fileId", getFileById);
export default router;
