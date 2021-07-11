const express = require('express');
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserProfile,
} = require('../controllers/userController');

const { admin, protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getAllUsers);

router.route('/:id').get(getUser);

router.route('/:id').put(updateUser);

router.route('/:id').delete(deleteUser);

module.exports = router;
