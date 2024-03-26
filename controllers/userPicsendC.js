const UserPic = require("../models/UserPic");

const sendPic = async (req, res) => {
  const user = req.user;

  try {
    const doc = await UserPic.findOne({ username: user.username });
    if (!doc) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(doc);
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  sendPic,
};
