import express from "express";
import {
  createUser,
  listUsers,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/list", listUsers);

router.post("/create", createUser);

router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
