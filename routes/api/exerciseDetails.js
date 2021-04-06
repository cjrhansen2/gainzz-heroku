const router = require("express").Router();
const exerciseDetailsController = require("../../controllers/ExerciseDetailsController");

router.route('/')
  .post(exerciseDetailsController.create)
  
  
router.route('/:id')
  .put(exerciseDetailsController.update)
  .delete(exerciseDetailsController.delete)
  .get(exerciseDetailsController.findOne);

router.route('/user/:userId')
  .get(exerciseDetailsController.findAllByUserId)

  module.exports = router;