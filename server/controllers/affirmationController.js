import { StatusCodes } from "http-status-codes";
import Affirmation from "../models/Affirmation.js";

export const listAffirmation = async (req, res) => {
  try {
    const listAffirmation = await Affirmation.find().populate("content");
    return res.status(StatusCodes.OK).json(listAffirmation);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export default { listAffirmation };
