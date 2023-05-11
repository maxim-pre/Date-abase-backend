import passportJWT from 'passport-jwt';
import {secretKey} from '../config/topSecret.js';

const ExtractJWT = passportJWT.ExtractJwt
const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = secretKey; 

export default jwtOptions 

