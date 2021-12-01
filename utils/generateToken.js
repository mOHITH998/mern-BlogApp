const jwt = require('jsonwebtoken');

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

module.exports = generateToken;
