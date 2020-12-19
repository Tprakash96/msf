const mongoose = require('mongoose');
const { currentTime } = require('../../utils/time');

module.exports = mongoose.model('Products', {
  code:{
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  gst: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: currentTime(),
  },
  updatedAt: {
    type: Date,
    default: currentTime(),
  },
});
