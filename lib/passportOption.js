import dotenv from "dotenv";
import passportJWT from "passport-jwt";

dotenv.config();

const ExtractJWT = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET_KEY;

export default jwtOptions;
