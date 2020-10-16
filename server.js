// Import third-party packages

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


// Create server

const app = express();


// Setup logger

app.use(logger("dev"));



// Set server port

const PORT = process.env.PORT || 8000;



// Setup Express to serve files from public folder

app.use(express.static("public"));



// Setup Express to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Setup Mongoose to connect to app

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});



// Setup routes

const routesAPI = require("./routes/api.js");
const routesView = require("./routes/view.js");

app.use(routesAPI);
app.use(routesView);



// Start listener

app.listen(PORT, function() {
    console.log(`The server is listening on PORT ${PORT}`);
});