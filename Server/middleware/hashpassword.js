const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = (req, res) => {
  const plainPassword = req.body.password;

  bcrypt.hash(plainPassword, saltRounds, function (err, hash) {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ error: "Error hashing password" });
    }

    console.log("Hashed password:", hash);
    res.json({ hash });
  });
};

module.exports = hashPassword;
