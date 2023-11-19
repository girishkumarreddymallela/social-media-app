const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuerySchema = new Schema({
  query: {
    type: String,
    required: true
  },
  AskedBy: {
    type: String,
    required: true
  }
});

const Query = mongoose.model('Query', QuerySchema);

module.exports = Query
