import mongoose from "mongoose";

// sentBy is a user id in string format
const messageSchema = new mongoose.Schema(
  {
    sentBy: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// whoever initiates the conversation is participant one
// participant one and two are user ids in string format
const conversationSchema = new mongoose.Schema(
  {
    participantOne: { type: String, required: true },
    participantTwo: { type: String, required: true },
    messages: [messageSchema],
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export { Conversation };
