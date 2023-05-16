import { StatusCodes } from "http-status-codes";
import Affirmation from "../models/Affirmation.js";

export const listAffirmation = async (req, res) => {
  try {
    const listAffirmations = await Affirmation.find();
    return res.status(StatusCodes.OK).json(listAffirmations);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
