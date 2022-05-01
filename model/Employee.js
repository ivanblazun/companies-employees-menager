const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'companies'
  },


  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    reqired: true
  },
  citizenship: {
    type: String,
    required: false
  },
  workPath: {
    type: Number,
    required: false
  },
  penInsurance: {
    type: {},
    reqired: true,
    default: {
      range: 1
    }
  },
  companyName: {
    type: String,
    required: true
  },
  workPlace: {
    type: String,
    required: false,

  },
  salary: {
    mainSalary: {
      type: Number,
      required: false
    },
    bonus: {
      type: Number,
      default: null
    }
  },
  salaryList: {
    type: [],
    default: [],
    required: false
  },
  workingHours: {
    type: {},
    default: {},
    required: false
  }
})

module.exports = mongoose.model('employee', employeeSchema)