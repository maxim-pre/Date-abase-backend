import express from "express"
import {User} from "../models/user.js"
import jwt from 'jsonwebtoken'
import passport from "passport";
import bcrypt from "bcrypt"
import jwtOptions from "../lib/passportOption.js";

const router = express.Router();


router.post('/api/login', async (req, res) => {
    try {
        if (req.body.user.username && req.body.user.password) {
            const user = await User.findOne({username:req.body.user.username})
            if (user){
                bcrypt.compare(req.body.user.password, user.password)
                    .then(result => {
                        if (result) {
                            const payload = {
                                id: req.body.user.id
                            }
                            const token = jwt.sign(payload, jwtOptions.secretOrKey, {expiresIn:60})
                            res.status(200).json({success:true, token:token})
                        }
                        else {
                            res.status(401).json({success:false})
                        }
                    })
                    .catch(err => {res.json(err)})
            }
            else {
                res.status(401).json({success:false})
            }
        } else {
            return res.status(400).json({error:"username and password are required"})
        }
    } catch (err) {
            res.status(500).json({error:err})
    }
})

export default router;