import express from "express";
import { Conversation } from "../models/conversation.js";
import {
  getConversationsByUserId,
  createConversation,
  updateConversationWithMessage,
  deleteConversation,
} from "../controllers/conversationsController.js";

const router = express.Router();

// create a conversation between two users
router.post("/api/conversations", createConversation);

// get all conversations for a user
// id is a user id
router.get("/api/conversations/:id", getConversationsByUserId);

// add message to conversation
// id is the conversation id
router.put("/api/conversations/:id", updateConversationWithMessage);

router.delete("/api/conversations/:id", deleteConversation);

export default router;
