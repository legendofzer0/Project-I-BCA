const jwt = require("jsonwebtoken");
require("dotenv").config();
const token = jwt.sign({ name: "jenish" }, process.env.ACCESS_TOKEN_SECRET, {
  expiresIn: "2s",
});

const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
console.log(token);
console.log(verify);

setTimeout(() => {
  const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  console.log(verify);
}, 6000);
