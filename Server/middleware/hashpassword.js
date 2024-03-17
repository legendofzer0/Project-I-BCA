const bcrypt = require("bcrypt");
const saltRounds = 10;
// const plainPassword = "hellothisistest";
const hashPassword = (req, res) => {
  const plainPassword = req.body;
  bcrypt.hash(plainPassword, saltRounds, function (err, hash) {
    console.log(hash);
    res.json(hash);
  });
};
