require("dotenv").config();
// Import express to utilize various middleware in the app and body-parser to handle parsing of requests and responses. 
const express = require("express");
const bodyParser = require("body-parser");

// create the express app
const app = express();

// Declare the server port
const port = process.env.PORT || 5000;

// parse url encoded requests
app.use(bodyParser.urlencoded({ extended: true}));

// parse requests of content type application/json
app.use(bodyParser.json());

// define a root route
app.get('/', (req, res) => {
    res.send("Welcome to Health plants of Uganda.");
});

// import routes
const plantRoute = require('./src/routes/plant.route');

// Use routes as middleware with the help of express.
app.use('/api/plants', plantRoute);

// listen for requests
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})
