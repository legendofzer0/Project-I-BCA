const express = require("express");
const app = express();

//MIDDLEWARE
app.use(express.json());

//PORT
app.listen(8000, () => {
  console.log("Server is running on port " + 8000);
});
