const Message = require('../models/message');
const addMessage = async (req, res) => {
  // Check if likes and likedBy information is present in the request
  if ( req.body.likedBy) {
    // Fetch the message using the ID and update it with the received information
    try {
      const doc = await Message.findOneAndUpdate(
        { _id: req.body.messageId },
        { $push: { likedBy: req.body.likedBy }, $inc: { noOfLikes: 1 } },
        { new: true, upsert: true } // Add this option
      );
      
      res.status(200).json({ message: 'Data updated successfully' });

    } catch (err) {
      console.log("hello error came man", err);
    }
    return; // Add this line
  } else {
    // If likes and likedBy information is not present, add a new message as before
    const newMessage = new Message({
      username: req.user.username,
      message: req.body.message
    });

    try {
      await newMessage.save();
      res.json({ message: 'Message added successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
module.exports = {
  addMessage
};
