const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/user");
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} from "../controllers/userController";

const router = express.Router();

router.get("/api/users", getAllUsers);

router.get("/api/users/:id", getUserById);

router.post("/api/users", createUser);

router.put("/api/users/:id", updateUserById);

router.delete("/api/users/:id", deleteUserById);

module.exports = router;
