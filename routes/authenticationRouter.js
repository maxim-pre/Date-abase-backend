import express from "express"
import {User} from "../models/user.js"
import jwt from 'jsonwebtoken'
import passport from "passport";
import bcrypt from "bcrypt"
import jwtOptions from "../lib/passportOption.js";


const router = express.Router();

router.post('/api/login', async (req, res) => {
    try {
        const user = User.findOne({username:req.body.user.username, password:req.body.user.password})
        const payload = {
            id: req.body.user.id
        }
        const token = jwt.sign(payload, jwtOptions.secretOrKey, {expiresIn:60})
        res.status(200).json({success:true, token:token})
    } catch (err) {
        res.status(500).json({error:err})
    }
  
})
