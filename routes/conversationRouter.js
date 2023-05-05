import express from "express";
import mongoose from "mongoose";
import { Conversation } from "../models/conversation.js";

const router = express.Router();

// create a conversation between two users
router.post("/api/conversations", async (req, res) => {
  try {
    console.log("hello");
    const conversation = await Conversation.create(req.body.conversation);
    res.status(200).json({ conversation: conversation });
  } catch (error) {
    res.status(200).json(error);
  }
});

// get all conversations for a user
router.get("/api/conversations/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const conversation = await Conversation.find({
      $or: [{ participantOne: id }, { participantTwo: id }],
    });
    res.status(200).json({ conversation: conversation });
  } catch (error) {
    res.status(200).json(error);
  }
});

export default router;
