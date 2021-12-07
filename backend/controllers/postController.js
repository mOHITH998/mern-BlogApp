const Post = require('../models/postModel');
const asyncHandler = require('../utils/catchAsync');

exports.getAllPosts = asyncHandler(async (req, res) => {
  let data = {};
  const username = req.query.user;
  const categories = req.query.cat;
  if (username) {
    data = await Post.find({ username });
  } else if (categories) {
    data = await Post.find({
      category: {
        $in: [categories],
      },
    });
  } else {
    data = await Post.find();
  }
  res.status(200).json({
    status: 'success',
    result: data.length,
    data,
  });
});

exports.getPosts = asyncHandler(async (req, res) => {
  const post = Post.findById(req.params.id);
  const doc = await post;
  if (doc) {
    res.status(200).json({
      status: 'success',
      doc,
    });
  }
});

exports.createPost = asyncHandler(async (req, res) => {
  const newPost = new Post(req.body);
  const savePost = await newPost.save();
  res.status(201).json({
    status: 'success',
    savePost,
  });
});

exports.updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.username === req.body.username) {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      status: 'success',
      updatedPost,
    });
  }
});

exports.deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  console.log(post.username)
  console.log(req.body.username)
  if (post.username === req.body.username) {
    await post.delete();
    res.status(204).json({
      status: 'success',
      data: null,
    });
  }
});
