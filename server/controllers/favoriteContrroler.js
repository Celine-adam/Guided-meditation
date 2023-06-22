import { StatusCodes } from "http-status-codes";
import Favorite from "../models/Favorite.js";
/**
 * Controller method to create a new order
 * @param {*} req
 * @param {*} res
 */
export const createFavorite = async (req, res) => {
  try {
    const createdFavorite = await Favorite.create({
      user: req.user._id,
      content: req.body.content,
    });
    const Populate = await createdFavorite.populate("user");
    // const Populate = await Favorite.find({ _id: createdFavorite._id }).populate(
    //   "user"
    // );
    return res
      .status(StatusCodes.OK)
      .json({ message: "fav was created", Populate });
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
export const listFavoriteByUserId = async (req, res) => {
  try {
    const listFav = await Favorite.find({
      user: req.user._id,
    }).populate("user");
    return res.status(StatusCodes.OK).json(listFav);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const deleteFavoriteById = async (req, res) => {
  try {
    const favorite = await Favorite.findByIdAndDelete(req.params.id);

    if (!favorite) {
      return res.status(StatusCodes.NOT_FOUND).json("fav not found");
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "fav deleted", deletedFavorite: favorite });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};
