const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/api/users", async (req, res) => {
  try {
    const userInformation = req.body.user;
    const newUser = User.create(userInformation);
    res.status(200).json({ user: newUser });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
