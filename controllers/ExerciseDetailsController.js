const db = require("../models");

module.exports = {

  create: function(req, res) {
    db.ExerciseDetails
    .create(req.body)
    .then(({ _id, userId }) => db.Exercise.findOneAndUpdate({_id: userId}, { $push: { exerciseDetails: _id }}, {new: true }))
    .then(dbExercies => {
      res.json(dbExercies);
    })
    .catch(err => {
      res.json(err);
    });
  },

  update: function(req, res) {
    db.ExerciseDetails
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  findAll: function(req, res) {
    db.ExerciseDetails
    .find()
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  findAllByUserId: function(req, res) {
    db.ExerciseDetails
    .find({ userId: req.params.userId })
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  delete: function(req, res) {
    db.ExerciseDetails
    .findByIdAndDelete(req.params.id)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  findOne: function(req, res) {
    db.ExerciseDetails
    .findById(req.params.id)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  }
}