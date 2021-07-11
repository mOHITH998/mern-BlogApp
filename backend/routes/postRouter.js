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

router.route('/post-create').post(createPost);

router.route('/:id').put(updatePost);

router.route('/:id').delete(deletePost);

module.exports = router;
