//msC means ---------message send controller
const Message = require('../models/message');

const sendMessage = async (req, res) => {
    try {
        const messages = await Message.find({});
        console.log(messages)
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
module.exports = {
    sendMessage

}; 

/*const Message = require('../models/message');

const sendMessage = async (req, res) => { 

    const limit = parseInt(req.query.limit); // Number of posts to send per request
    const skip = parseInt(req.query.skip); // Number of posts to skip in the database

    try {
        
        const messages = await Message.find({})
           
            .skip(skip)
            .limit((limit)); // limit the number of documents

        console.log(messages)
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 

module.exports = {
    sendMessage

};  */
 


