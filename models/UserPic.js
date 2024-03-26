const mongoose = require("mongoose");

const UserPicSchema = new mongoose.Schema({
  username: String,
  imageurl: String,
  imageurlM: String,
});

const UserPic = mongoose.model("UserPic", UserPicSchema);

module.exports = UserPic;
