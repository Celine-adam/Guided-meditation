import { StatusCodes } from "http-status-codes";
import Meditation from "../models/Meditation.js";
export const listMeditations = async (req, res) => {
  try {
    const listMeditations = await Meditation.find();
    return res.status(StatusCodes.OK).json(listMeditations);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};