const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  commentedTo: {
    type: String,
    required: true
  } ,
  commentedBy: {
    type: String,
    required: true
  }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports =  Comment;
