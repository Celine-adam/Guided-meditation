import express from "express";
import passport from "passport";
import {
  createFavorite,
  listFavoriteByUserId,
} from "../controllers/favoriteContrroler.js";

const router = express.Router();
router.use(passport.authenticate("jwt", { session: false }));
router.get("/list", listFavoriteByUserId);
router.post("/create", createFavorite);
export default router;
