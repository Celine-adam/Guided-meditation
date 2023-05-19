import express from "express";
import {
  createUser,
  listUsers,
  loginUser,
} from "../controllers/userController.js";

const router = express.Router();

//GET:: http://localhost:3001/api/users/list
router.get("/list", listUsers);
//POST:: http://localhost:3001/api/users/create
//EXAMPLE JSON - BODY
// {
// 	"firstName": "Mark",
// 	"lastName": "Test",
// 	"userName": "Mark123",
// 	"email": "mark.test@testing.com",
//  "password":"testing123"
// }
router.post("/create", createUser);

//POST:: http://localhost:3001/api/users/login
//EXAMPLE JSON - BODY
// {
// 	"userName": "Mark123",
// 	"password": "testing123",
// }
router.post("/login", loginUser);

export default router;
