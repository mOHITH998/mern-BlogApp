const express = require('express');
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const { admin, protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, admin, getAllUsers)

router.route('/:id').get(getUser);

router.route('/:id').put(protect, admin, updateUser);

router.route('/:id').delete(protect, admin, deleteUser);

module.exports = router;
