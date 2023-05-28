import { StatusCodes } from "http-status-codes";
import File from "../models/File.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
console.log("the import filename", import.meta.url); //full URL to the module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("filename", __filename);
console.log("dirname", __dirname);

export const getFileById = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    console.log(
      "location of file",
      path.join(__dirname, `../${file.filePath}`)
    );
    return res.sendFile(path.join(__dirname, `../${file.filePath}`));
  } catch (error) {}
};

export const uploadFile = async (req, res) => {
  console.log(req.file);

  try {
    const newFile = await File.create({
      filename: req.file.filename,
      filePath: req.file.path,
      size: req.file.size,
      fileMimetype: req.file.mimetype,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "file uploaded", newFile });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong" });
  }
};
