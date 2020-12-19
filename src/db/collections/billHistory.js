const mongoose = require('mongoose');
const moment = require('moment');
const { currentTime } = require('../../utils/time');

module.exports = mongoose.model('billhistories', {
  code:{
    type: String,
    required: true,
  },
  pricePerUnit: {
    type: Number,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  gst:{
    type: Number,
    required: true,
  },
  totalPrice:{
    type: Number,
    required: true,
  },
  date:{
    type:String,
    required:true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: String,
    default: new Date()
  },
  updatedAt: {
    type: String,
    default: new Date()
  },
});
