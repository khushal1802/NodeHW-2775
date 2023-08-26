const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  destination: {
    type: String,
    trim: true
  },
  startDate: {
    type: Date,
    trim: true
  },
  endDate: {
    type: Date,
    trim: true
  },
  budget: {
    type: Number,
    trim: true
  },
  travelers: {
    type: Number,
    trim: true
  }
});

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;
