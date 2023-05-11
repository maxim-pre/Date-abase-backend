import mongoose from "mongoose";
import currentDB from "../config/db.js";
import { Question } from "../models/question.js";
import { questions } from "./questionSeedData.js";
import { users } from "./userSeedData.js";
import { User } from "../models/user.js";
// import users from './userSeedData.js'

const seedData = async () => {
  try {
    await mongoose.connect(currentDB, { useNewUrlParser: true });
    await mongoose.connection.once("open", () =>
      console.log("Connected to MongoDB")
    );

    console.log("MongoDB connected at: " + currentDB);
    await mongoose.connection.db.dropDatabase();
    console.log("Deleted old Database");

    // Add questions to database
    const questionsSeeded = await Question.create(questions);
    console.log(`Created ${questionsSeeded.length} questions in database`);

    // // Add users to database
    const usersSeeded = await User.insertMany(users);
    console.log(`Created ${usersSeeded.length} users in database`);

    // // Add survey answers to database
    // const surveyAnswersSeeded = await SurveyAnswer.create(surveyAnswers)
    // console.log(`Created ${surveyAnswersSeeded.length} survey answers in database`)

    // // Add conversations to database
    // const conversationsSeeded = await Conversation.create(conversations)
    // console.log(`Created ${conversationsSeeded.length} conversations in database`)

    console.log("Seeding complete!");

    await mongoose.connection.close();
  } catch (err) {
    await mongoose.connection.close();
    console.log("Error! Database connection closed");
    console.log(err);
  }
};

seedData();
