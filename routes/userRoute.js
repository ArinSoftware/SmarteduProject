const express = require('express')
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.createUser); // http://localhost:3000/users/signup
router.route('/login').post(authController.loginUser);

module.exports = router;