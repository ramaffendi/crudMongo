import express from "express";
import {
  getUser,
  saveUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/UserController.js";

const router = express.Router();

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", saveUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
