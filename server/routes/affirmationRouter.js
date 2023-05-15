import express from "express";
import { listAffirmation } from "../controllers/affirmationController.js";
const router = express.Router();
router.get("/list", listAffirmation);
export default router;
