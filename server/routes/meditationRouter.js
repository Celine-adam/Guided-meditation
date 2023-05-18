import express from "express";
import { listMeditations } from "../controllers/meditationController.js";

const router = express.Router();
router.get("/list", listMeditations);

export default router;
