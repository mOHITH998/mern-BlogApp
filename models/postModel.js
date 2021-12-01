const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'An post must have title'],
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: [String],
    required: false,
    username: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: false,
    },
    comments: [
      {
        type: String,
        required: true,
      },
    ],
    author: {
      type: String,
      required: false,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const post = mongoose.model('Post', postSchema);
module.exports = post;
