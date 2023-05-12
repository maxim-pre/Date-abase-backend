// We have to import a lot of the libaries 
import express from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import passport from "passport";
import bcrypt from "bcrypt";
import jwtOptions from "../lib/passportOption.js";

// Initialize express router
const router = express.Router();

//This funtion so we can to check if the user exists and if the password provided works
const checkUser = async (username, password, res) => {
  //This will find the user in the database
  const user = await User.findOne({ username: username });
   // If password matches, generate and send a JWT token to the client
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const payload = {
        id: user.id,
      };
      const token = jwt.sign(payload, jwtOptions.secretOrKey, {
        expiresIn: 60,
      });
      return res.status(200).json({ success: true, token: token });
       // If user does not exist, send an error message to the client
    } else {
      return res
        .status(400)
        .json({ success: false, message: "invalid username or password" });
    }
      // If password does not match, send an error message to the client
  } else {
    return res
      .status(400)
      .json({ success: false, message: "invalid username or password" });
  }
};

// This is the route to handle the user login
router.post("/api/login", async (req, res) => {
  const username = req.body.user.username;
  console.log(req.body);
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
