// Import required libraries and modules
import dotenv from "dotenv";
import passportJWT from "passport-jwt";

// Load environment variables from .env file
dotenv.config();

// Create an object to hold JWT options
const ExtractJWT = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET_KEY;

export default jwtOptions;
