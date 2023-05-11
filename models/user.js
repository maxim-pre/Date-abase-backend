import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true},
    gender: String,
    bio: String,
    photoOne: String,
    photoTwo: String,
    photoThree: String,
    interestedInGender: { type: [String], required: true },
    location: String,
    matches: [String],
    surveyAnswersId: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User, userSchema };
