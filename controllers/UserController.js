const db = require('../models');

module.exports = {

  createUser: function(req, res) {
    db.User
    .create(req.body)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },
  
  findAll: function(req, res) {
    db.User
    .find()
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  findById: function(req, res) {
    db.User
    .findById(req.user.id)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(404).json(err));
  },

  populateAll: function(req, res) {
   db.User
  .findOne({_id: req.params.id})
  .populate({
    path: 'exercises',
    populate: {
      path: 'exerciseDetails'
    }
  })
  .then(dbResults => res.json(dbResults))
  .catch(err => res.status(404).json(err));
},

  populateExercises: function(req, res) {
    db.User
  .findOne({_id: req.params.id})
  .populate('exercises')
  .then(dbResults => res.json(dbResults))
  .catch(err => res.status(404).json(err));
  },

}
