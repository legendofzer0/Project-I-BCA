const jwt = require("jsonwebtoken");
require("dotenv").config();

const genToken = (user) => {
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10s", // Or another appropriate duration
  });
  return token;
};

module.exports = genToken;

// const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
// console.log(token);
// console.log(verify);

// setTimeout(() => {
//   const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//   console.log(verify);
// }, 6000);
