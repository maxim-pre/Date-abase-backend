import dotenv from "dotenv";
dotenv.config();

const mongooseBaseName = "date-abase";

const database = {
  development: `mongodb://localhost:27017/${mongooseBaseName}-development`,
  test: `mongodb://localhost:27017/${mongooseBaseName}-test`,
};

// Define the database for the development environment
// const localDB = "mongodb://localhost:27017/date-abase";
const localDB =
  process.env.NODE_ENV === "test" ? database.test : database.development;

// Environment variable MONGODB_URI will be available in Heroku production environment.
// Otherwise, use the development database
const currentDB = process.env.MONGODB_URI || localDB;

// Export the appropriate database based on the current environment
export default currentDB;
