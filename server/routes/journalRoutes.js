import express from "express";
import passport from "passport";
import {
  createJournal,
  deleteJournalById,
  listJournalByUserId,
} from "../controllers/journalController.js";

const router = express.Router();
router.use(passport.authenticate("jwt", { session: false }));
router.get("/list", listJournalByUserId);
router.post("/create", createJournal);
router.delete("delete/:id", deleteJournalById);
export default router;
