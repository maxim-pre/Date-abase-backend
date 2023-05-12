// Import required libraries and modules
import passportJWT from 'passport-jwt';
import jwtOptions from './passportOption';
import { User } from '../models/user.js';

// Create a new instance of JwtStrategy with the provided jwtOptions and a callback function
const JwtStrategy = passportJWT.Strategy;

const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
    try {
        // Find the user in the database using the user ID stored in the JWT payload
        const user = User.findById(jwtPayload.id)
         // If user is found, return the user object to the next function in the middleware chain
         next(null, user)
        next(null, user)
    } catch (err) {
         // If an error occurs, return false to the next function in the middleware chain
        next(null, false)
    }
})

export default strategy