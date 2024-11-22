const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  organizer: String,
  contact: String,
  venue: String,
  date: Date,
  status: String,
  category: String,
  types: String,
});

module.exports = mongoose.model('Event', eventSchema); 