const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  
  type: {
    type: String,
    trim: true,
    required: true,
  },

  name: {
    type: String,
    trim: true,
    required: true,
  },

  userId: {
    type: String,
    trim: true,
    required: true,
  },

  exerciseDetails: [
    {
      type: Schema.Types.ObjectId,
      ref: "ExerciseDetails"
    }
  ]
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;