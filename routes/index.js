const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.post('/register',
  userController.validateRegister,
  userController.register,
  authController.login
);

module.exports = router;
