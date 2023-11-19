const Query = require('../models/query'); // replace with the path to your model

const saveQuery = async (req, res) => {
  const { query, AskedBy } = req.body;

  try {
    const newQuery = new Query({
      query,
      AskedBy
    });

    const savedQuery = await newQuery.save();

    res.status(200).json(savedQuery);
  } catch (error) {
    res.status(500).json({ error: 'There was a server error.' });
    console.log(error);
  }
};

module.exports = {saveQuery};
