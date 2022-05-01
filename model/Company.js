
const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  companyName: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true,

  },
  headquarter: {
    type: String,
    required: true
  },
  pin: {
    type: Number,
    required: true
  },
  employees: {
    type: [],
    default: [],

  },

  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('company', companySchema)