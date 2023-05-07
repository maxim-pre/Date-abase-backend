import express from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import passport from "passport";
import bcrypt from "bcrypt";
import jwtOptions from "../lib/passportOption.js";

const router = express.Router();

// router.post('/api/login', async (req, res) => {
//     try {
//         if (req.body.user.username && req.body.user.password) {
//             const user = await User.findOne({username:req.body.user.username})
//             if (user){
//                 bcrypt.compare(req.body.user.password, user.password)
//                     .then(result => {
//                         if (result) {
//                             const payload = {
//                                 id: req.body.user.id
//                             }
//                             const token = jwt.sign(payload, jwtOptions.secretOrKey, {expiresIn:60})
//                             res.status(200).json({success:true, token:token})
//                         }
//                         else {
//                             res.status(401).json({success:false})
//                         }
//                     })
//                     .catch(err => {res.json(err)})
//             }
//             else {
//                 res.status(401).json({success:false})
//             }
//         } else {
//             return res.status(400).json({error:"username and password are required"})
//         }
//     } catch (err) {
//             res.status(500).json({error:err})
//     }
// })

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
