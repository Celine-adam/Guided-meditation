import express from "express";
import passport from "passport";
import {
  listMeditations,
  listMeditationsbyTime,
} from "../controllers/meditationController.js";

const router = express.Router();
router.get(
  "/list",
  passport.authenticate("jwt", { session: false }),
  listMeditations
);
router.get(
  "/:time",
  passport.authenticate("jwt", { session: false }),
  listMeditationsbyTime
);
export default router;
