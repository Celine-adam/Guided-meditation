import { StatusCodes } from "http-status-codes";
import Journal from "../models/Journal.js";

/**
 * Controller method to create a new order
 * @param {*} req
 * @param {*} res
 */
export const createJournal = async (req, res) => {
  try {
    //Create the order
    const createdJournal = await Journal.create({
      user: req.user._id,
      content: req.body.content,
    });
    const Populate = await createdJournal.populate("user");
    return res
      .status(StatusCodes.OK)
      .json({ message: "journal was created", Populate });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
/**
 * Controller method that lists all the orders by user id
 * @param {*} req
 * @param {*} res
 */
export const listJournalByUserId = async (req, res) => {
  try {
    const listJournal = await Journal.find({
      user: req.user._id,
    }).populate("user");
    return res.status(StatusCodes.OK).json(listJournal);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const deleteJournalById = async (req, res) => {
  try {
    const journal = await Journal.findByIdAndDelete(req.params.id);

    if (!journal) {
      return res.status(StatusCodes.NOT_FOUND).json("journal not found");
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "journal deleted", deletedJournal: journal });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};
