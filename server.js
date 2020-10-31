// Import third-party module(s)

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");



// Create server

const app = express();



// Set server port

const PORT = process.env.PORT || 8000;



// Setup Express to serve files from public folder

app.use(express.static("public"));



// Setup Express to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Setup logger

app.use(logger("dev"));



// Setup Mongoose to connect to app

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);



// Setup routes

const routesAPI = require("./routes/api.js");
const routesView = require("./routes/view.js");

app.use(routesAPI);
app.use(routesView);



// Start listener

app.listen(PORT, function() {
    console.log(`The server is listening on PORT ${PORT}`);
});