const jwt = require("jsonwebtoken");
require("dotenv").config();

const decodeToken = (token) => {
  const decode = jwt.decode(token);
  return decode;
};

module.exports = decodeToken;
