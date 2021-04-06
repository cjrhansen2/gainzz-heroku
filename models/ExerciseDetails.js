const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseDetailsSchema = new Schema({
  weight: {
    type: Number,
    trim: true,
  },

  sets: {
    type: Number,
    trim: true,
  },

  reps: {
    type: Number,
    trim: true,
  }, 

  date: {
    type: Date,
    default: Date.now(),
  },

  userId: {
    type: String,
    trim: true,
    required: true,
  },
 
});

const ExerciseDetails = mongoose.model('ExerciseDetails', exerciseDetailsSchema);

module.exports = ExerciseDetails;