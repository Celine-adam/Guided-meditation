import { StatusCodes } from "http-status-codes";
import Meditation from "../models/Meditation.js";
export const listMeditations = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the page number from query parameters or default to 1
    const limit = 6; // Number of documents to fetch per page
    const skip = (page - 1) * limit; // Calculate the number of documents to skip based on the page number

    const totalMeditations = await Meditation.countDocuments(); // Get the total count of meditations
    const meditations = await Meditation.find().skip(skip).limit(limit); // Fetch the meditations based on skip and limit

    return res.status(StatusCodes.OK).json({
      page,
      limit,
      totalMeditations,
      meditations,
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const listMeditationsbyTime = async (req, res) => {
  try {
    const listMeditationsbyTime = await Meditation.find({
      time: req.params.time,
    });
    return res.status(StatusCodes.OK).json(listMeditationsbyTime);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const createMeditation = async (req, res) => {
  try {
    const createMeditation = await Meditation.create({
      title: req.body.title,
      description: req.body.description,
      audio: req.body.audio,
      time: req.body.time,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "meditation was created", createMeditation });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
