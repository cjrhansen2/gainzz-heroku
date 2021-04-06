const router = require("express").Router();
const userController = require("../../controllers/UserController");

router.route('/')
  .post(userController.createUser)
  .get(userController.findAll);

router.route('/:id')
  .get(userController.populateAll);

  router.route('/exercises/:id')
  .get(userController.populateExercises);
  
  router.route('/register')
  .post(userController.createUser);

  router.route('/login')
  .post(userController.createUser);

  router.route('/authenticated')
  .post(userController.createUser);

  module.exports = router;