import { StatusCodes } from "http-status-codes";
import Message from "../models/Message.js";

export const listMessages = async (req, res) => {
  try {
    const listMessages = await Message.find();
    return res.status(StatusCodes.OK).json(listMessages);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
