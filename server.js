require("dotenv").config();
// Import express to utilize various middleware in the app and body-parser to handle parsing of requests and responses. 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
// create the express app
const app = express();

// import routes
const plantRoute = require('./src/routes/plant.route');
const userRoute = require('./src/routes/user.route');
const conditionRoute = require('./src/routes/condition.route');
const remedyRoute = require('./src/routes/remedy.route');
const reviewRoute = require('./src/routes/review.route');
const commentRoute = require('./src/routes/comment.route');



// Declare the server port
const port = process.env.PORT || 5001;

// parse url encoded requests
app.use(bodyParser.urlencoded({ extended: true}));

// parse requests of content type application/json
app.use(bodyParser.json());

app.use(cors());
// app.use(express.static(path.join(_dirname, 'public')));
app.use(fileUpload());

// Use routes as middleware with the help of express.
app.use('/api/plants', plantRoute);
app.use('/api/users', userRoute);
app.use('/api/conditions', conditionRoute);
app.use('/api/remedies', remedyRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/comments', commentRoute);


// define a root route
app.get('/', (req, res) => {
    res.send("Welcome to Health plants of Uganda.");
});


// listen for requests
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})
