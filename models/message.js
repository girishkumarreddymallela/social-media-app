const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  username: {
    type: String,
    
  },
  message: {
    type: Schema.Types.Mixed,
    default:"null"
  },
  timestamp: {
    type: Date,
    default: Date.now
  },

  likedBy: {
    type: Array,
    default: []
  },
  noOfLikes: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Message', MessageSchema);

