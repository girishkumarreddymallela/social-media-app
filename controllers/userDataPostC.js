const Userdata = require("../models/UserData");

const PostData = async (req, res) => {
  const { username, Name, Date_of_birth, Education, Interests, Address } =
    req.body;

  try {
    const user = await Userdata.findOneAndUpdate(
      { username }, // find a document with that filter
      { username, Name, Date_of_birth, Education, Interests, Address }, // document to insert when nothing was found
      { upsert: true, new: true, runValidators: true } // options
    );

    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  PostData,
};
