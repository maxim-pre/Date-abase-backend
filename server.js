// Require NPM packages
const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');

// Database configuration
const db = mongoose.connection;
const dbConfig = require ('./config/db');

// Establish database connection
mongoose.connect(dbConfig)
db.on('error', (error) => console.log(`ERROR: ${error.message}`));
db.on('connected', () => console.log(`MongoDB connected at ${dbConfig}`));
db.on('disconnected', () => console.log('MongoDB disconnected'));

// Instantiate express application object
const app = express();

// Define port for the API to run on
// Try to find an environment first, if not then go for 5007
const port = process.env.PORT || 5007;

// Middlewares
// Use body-parser middleware to parse the request body
app.use(express.json());
// Set CORS headers on response from this API using the 'cors' NPM package
// This is very naughty, we should do it correctly when we have more time
app.use(cors({
    origin: 'http://localhost:3000',
}))

// Require necessary route files
app.get('/', (req, res) => res.send('Hello World!'))

// Start the server and listen for requests on the given port
app.listen(port, () => console.log(`Date-abase is listening on port ${port}`))