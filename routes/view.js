// Import native module(s)

const router = require("express").Router();
const path = require("path");


// Create post end-points for read (get) requests

router.get("/exercise", (request, response) => {
  response.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (request, response) => {
  response.sendFile(path.join(__dirname, "../public/stats.html"));
});


// Export router for use my other module(s)

module.exports = router;