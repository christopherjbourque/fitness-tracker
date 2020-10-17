// Import third-party module(s)

const mongoose = require("mongoose");


// Set Mongoose schema

const Schema = mongoose.Schema;


// Define Mongoose schema

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// Add dynamically-created property to Mongoose schema

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});


// Create Workout

const Workout = mongoose.model("Workout", workoutSchema);


// Export Workout for use my other module(s)

module.exports = Workout;