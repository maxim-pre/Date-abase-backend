import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sentBy: Number,
  recievedBy: Number,
  sentOn: Date,
  readOn: Date,
  content: String,
});

const conversationSchema = new mongoose.Schema(
  {
    users: [Number],
    startedOn: Date,
    endedOn: Date,
    messages: [messageSchema],
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export { Conversation };
