import express from "express";
import {
  listMeditations,
  listMeditationsbyTime,
} from "../controllers/meditationController.js";

const router = express.Router();
router.get("/list", listMeditations);
router.get("/:time", listMeditationsbyTime);
export default router;
