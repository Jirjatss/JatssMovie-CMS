const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
// console.log(secret);
const signToken = (data) => {
  return jwt.sign(data, secret);
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = {
  signToken,
  verifyToken,
};
