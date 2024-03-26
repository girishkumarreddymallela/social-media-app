const UserPic = require("../models/UserPic");

const PostPic = async (req, res) => {
  const { username, imageurl, imageurlM } = req.body;
  try {
    const user = await UserPic.findOneAndUpdate(
      { username }, // find a document with that filter
      { username, imageurl, imageurlM },
      { upsert: true, new: true, runValidators: true } // options
    );

    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  PostPic,
};
