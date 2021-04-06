const router = require("express").Router();
const userController = require("../../controllers/UserController");

router.route('/')
  .post(userController.createUser)
  .get(userController.findById);

router.route('/:id')
  .get(userController.populateAll);

  router.route('/exercises/:id')
  .get(userController.populateExercises);
  

  module.exports = router;