const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    nickname: String,
    bio: String,
    photo: String,
    interestedInGender: { type: String, required: true },
    location: String,
    matches: [Number],
    surveyAnswersId: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
