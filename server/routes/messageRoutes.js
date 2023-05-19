import express from "express";
import { listMessages } from "../controllers/messageController.js";

const router = express.Router();
router.get("/list", listMessages);
export default router;
