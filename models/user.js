//To be able to use this component we have to import mongoose
import mongoose from "mongoose";

//This is the schema for the user
// It has some optional parts and required parts
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    gender: String,
    bio: String,
    age: Number,
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
// So we can use this component in other files we have to export it.
export { User, userSchema };
