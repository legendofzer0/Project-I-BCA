// verifyToken.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  try {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

module.exports = verifyToken;
