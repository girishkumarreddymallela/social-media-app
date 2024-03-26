const mongoose = require("mongoose");

const UserdataSchema = new mongoose.Schema({
  username: String,
  Name: String,
  Date_of_birth: String,
  Education: String,
  Interests: String,
  Address: String,
});

const Userdata = mongoose.model("Userdata", UserdataSchema);

module.exports = Userdata;
