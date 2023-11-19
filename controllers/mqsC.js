const Query = require('../models/query');

const sendQuiries = async (req, res) => {
    try {
        const messages = await Query.find({});
        console.log(messages)
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
module.exports = {
    sendQuiries

}; 