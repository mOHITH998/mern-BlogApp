const User = require('../models/userModel');
const asyncHandler = require('../utils/catchAsync');

exports.getAllUsers = asyncHandler(async (req, res) => {
  const data = await User.find();
  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
});

exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).json('document not found, please enter valid ID');
  }
  const { password, __v, ...data } = user._doc;
  res.status(200).json({
    status: 'success',
    data,
  });
});

exports.updateUser = asyncHandler(async (req, res) => {
  const updatedDoc = await User.findByIdAndUpdate(req.params.id, req.body);
  if (req.body.username === updatedDoc._id) {
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
  const user = await User.findById(req.params.id);
  if (user) {
    user.remove()
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
