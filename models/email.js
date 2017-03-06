var mongoose = require('mongoose');

module.exports = mongoose.model(
  'Email', {
    address: {
      type: String,
      default: ''
    }
  }
);