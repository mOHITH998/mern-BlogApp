const express = require('express');
const {
  getAllPosts,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

const { admin } = require('../middleware/authMiddleware');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getAllPosts);

router.route('/:id').get(getPosts);

router.route('/post-create').post(protect, createPost);

router.route('/:id').put(protect, updatePost);

router.route('/:id').delete(protect, admin, deletePost);

module.exports = router;
