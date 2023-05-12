// Import required libraries and modules
import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";

const router = express.Router();

// Define routes for getting all users, getting a user by ID, creating a user,
// updating a user by ID, and deleting a user by ID

router.get("/api/users", getAllUsers);

router.get("/api/users/:id", getUserById);

router.post("/api/users", createUser);

router.put("/api/users/:id", updateUserById);

router.delete("/api/users/:id", deleteUserById);

export default router;
