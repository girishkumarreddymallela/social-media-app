const Message = require('../models/message');
const sendMessageWhenSearch = async (req, res) => {
    try {
        const query = req.body.query; // get the query from the request body

        // use MongoDB's basic text search
        const messages = await Message.find({ $text: { $search: query } });

        // Get the full document for each message
        const fullMessages = await Promise.all(messages.map(async (message) => {
            return Message.findById(message._id);
        }));

        res.json(fullMessages);
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log("yes here it is");
        console.log(err);
    }
};

module.exports = {
    sendMessageWhenSearch
};

