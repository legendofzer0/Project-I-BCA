const jwt = require("jsonwebtoken");
require("dotenv").config();
// console.log(process.env.ACCESS_TOKEN_SECRET);
const token = jwt.sign({ name: "jenish" }, process.env.ACCESS_TOKEN_SECRET);

console.log(token);
