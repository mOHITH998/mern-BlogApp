const express = require('express');
const {
  registerUser,
  loginUser,
  protect,
} = require('../controllers/authController');

const router = express.Router();

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

module.exports = router;
