//CC  means comment controller------------------


const Comment = require('../models/comment'); 

const addComment = async (req, res) => {
  const { comment, commentedTo, commentedBy } = req.body;

  try {
    const newComment = new Comment({
      comment,
      commentedTo,
      commentedBy
    });

    const savedComment = await newComment.save();

    res.json({ message: 'Comment successfully added!', comment: savedComment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// controller for retrieveing comments


const getComments = async (req, res) => {
  const { commentedTo } = req.body;

  try {
    const comments = await Comment.find({ commentedTo });

    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};  
module.exports = { addComment, getComments };