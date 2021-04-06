const router = require("express").Router();
const exerciseController = require("../../controllers/ExerciseController");

router.route('/')
  .post(exerciseController.create)
  .get(exerciseController.findAll);

router.route('/populate/:id')
  .get(exerciseController.populate);

router.route('/:id')
  .put(exerciseController.update)
  .delete(exerciseController.delete);

router.route('/user/:userId')
  .get(exerciseController.findAllByUserId)

  module.exports = router;