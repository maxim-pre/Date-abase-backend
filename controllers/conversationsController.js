import { Conversation } from "../models/conversation.js";

// id is a user id
const getConversationsByUserId = async (req, res) => {
  const id = req.params.id;
  try {
    const conversation = await Conversation.find({
      $or: [{ participantOne: id }, { participantTwo: id }],
    });
    res.status(200).json({ conversation: conversation });
  } catch (error) {
    res.status(200).json(error);
  }
};

// create a conversation between two users
const createConversation = async (req, res) => {
  try {
    const conversation = await Conversation.create(req.body.conversation);
    res.status(200).json({ conversation: conversation });
  } catch (error) {
    res.status(200).json(error);
  }
};

// put a message object in the request body
const updateConversationWithMessage = async (req, res) => {
  try {
    const conversation = await Conversation.findByIdAndUpdate(
      req.params.id,
      {
        $push: { messages: req.body.message },
      },
      { new: true }
    );
    res.status(200).json({ conversation: conversation });
  } catch (error) {
    res.status(200).json(error);
  }
};

const deleteConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findByIdAndDelete(req.params.id);
    res.status(200).json({ conversation: conversation });
  } catch (error) {
    res.status(200).json(error);
  }
};

export {
  getConversationsByUserId,
  createConversation,
  updateConversationWithMessage,
  deleteConversation,
};
