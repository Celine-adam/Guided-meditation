import express from "express";
import passport from "passport";
import {
  listMeditations,
  listMeditationsbyTime,
  createMeditation,
} from "../controllers/meditationController.js";

const router = express.Router();
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  createMeditation
);
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
