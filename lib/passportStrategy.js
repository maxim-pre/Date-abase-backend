import passportJWT from 'passport-jwt';
import jwtOptions from './passportOption';
import { User } from '../models/user.js';

const JwtStrategy = passportJWT.Strategy;

const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
    try {
        const user = User.findById(jwtPayload.id)
        next(null, user)
    } catch (err) {
        next(null, false)
    }
})

export default strategy