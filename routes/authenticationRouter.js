import express from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import passport from "passport";
import bcrypt from "bcrypt";
import jwtOptions from "../lib/passportOption.js";

const router = express.Router();

const checkUser = async (username, password, res) => {
  const user = await User.findOne({ username: username });
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    const payload = {
      id: user.id,
    };
    const token = jwt.sign(payload, jwtOptions.secretOrKey, {
      expiresIn: 60,
    });
    return res.status(200).json({ success: true, token: token });
  } else {
    return res
      .status(400)
      .json({ success: false, message: "invalid username or password" });
  }
};

router.post("/api/login", async (req, res) => {
  const username = req.body.user.username;
  const password = req.body.user.password;

  if (username && password) {
    try {
      checkUser(username, password, res);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    return res
      .status(400)
      .json({ error: "username and password are required" });
  }
});

export default router;
