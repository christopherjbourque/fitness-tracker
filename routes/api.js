// Import third-party module(s)

const router = require("express").Router();


// Import custom module(s)

const Workout = require("../models/workout.js");


// Create post end-point for create (post) requests

router.post("/api/workouts", (request, response) => {
  Workout.create({})
    .then(dbWorkout => {
      response.json(dbWorkout);
    })
    .catch(error => {
      response.json(error);
    });
});


// Create post end-points for read (get) requests

router.get("/api/workouts", (request, response) => {
  Workout.find()
    .then(dbWorkouts => {
      response.json(dbWorkouts);
    })
    .catch(error => {
      response.json(error);
    });
});

router.get("/api/workouts/range", (request, response) => {
  Workout.find({}).limit(7)
    .then(dbWorkouts => {
      console.log(dbWorkouts)
      response.json(dbWorkouts);
    })
    .catch(error => {
      response.json(error);
    });
});


// Create post end-point for put (update) requests

router.put("/api/workouts/:id", ({ body, params }, response) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      response.json(dbWorkout);
    })
    .catch(error => {
      response.json(error);
    });
});


// Create post end-point for delete requests

router.delete("/api/workouts", ({ body }, response) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      response.json(true);
    })
    .catch(error => {
      response.json(error);
    });
});


// Export router for use my other module(s)

module.exports = router;