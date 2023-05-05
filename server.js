// Import NPM packages
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import questionRouter from "./routes/questionRouter.js";
import userRouter from "./routes/userRouter.js";
import surveyRouter from "./routes/surveyRouter.js";
import conversationRouter from "./routes/conversationRouter.js";

// Database configuration
const db = mongoose.connection;
import currentDB from "./config/db.js";

// Establish database connection
mongoose.connect(currentDB);
db.on("error", (error) => console.log(`ERROR: ${error.message}`));
db.on("connected", () => console.log(`MongoDB connected at ${currentDB}`));
db.on("disconnected", () => console.log("MongoDB disconnected"));

// Instantiate express application object
const app = express();

// Define port for the API to run on
// Try to find an environment first, if not then go for 5007
const port = process.env.PORT || 5007;

// Middlewares
// Use body-parser middleware to parse the request body
app.use(express.json());
// Set CORS headers on response from this API using the 'cors' NPM package
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Require necessary route files
// Testing route
app.get("/", (req, res) => res.send("Hello World!"));

// Import routes
app.use(questionRouter);
app.use(userRouter);
app.use(surveyRouter);
app.use(conversationRouter);

// Start the server and listen for requests on the given port
app.listen(port, () => console.log(`Date-abase is listening on port ${port}`));