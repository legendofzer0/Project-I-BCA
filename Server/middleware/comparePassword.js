const bcrypt = require("bcrypt");

const comparePassword = async (req, res) => {
  const { password, checkPassword } = req.body;

  if (!password || !checkPassword) {
    return res
      .status(400)
      .json({ error: "Missing password or checkPassword field" });
  }

  try {
    const isMatch = await bcrypt.compare(checkPassword, password);

    console.log("Passwords match:", isMatch);
    res.json({ isMatch });
  } catch (error) {
    console.error("Error comparing passwords:", error);
    res.status(500).json({ error: "Error comparing passwords" });
  }
};

module.exports = comparePassword;
