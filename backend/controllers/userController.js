const User = require('../models/userModel');
const Post = require('../models/postModel');
const asyncHandler = require('../utils/catchAsync');

exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    result: users.length,
    users,
  });
});

exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).json('document not found, please enter valid ID');
  }
  const { password, ...all } = user._doc;
  res.status(200).json({
    status: 'success',
    all,
  });
});

exports.updateUser = asyncHandler(async (req, res) => {
  const updatedDoc = await User.findByIdAndUpdate(req.params.id, req.body);
  if (req.body.username === updatedDoc.username) {
    return res.status(401).json('following User Already updated');
  }
  if (!updatedDoc) {
    return res.status(404).json('user not found, please enter valid info');
  }
  res.status(200).json({
    status: 'success',
    _id: updatedDoc._id,
    username: updatedDoc.username,
    email: updatedDoc.email,
  });
});

exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  await Post.deleteMany({ username: user.username });
  if (!user) {
    return res.status(404).json('No user found with this ID');
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  }
});
