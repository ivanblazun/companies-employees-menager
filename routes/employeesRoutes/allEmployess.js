const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Mongo Models
const Company = require('../../model/Company');
const Employee = require('../../model/Employee');

router.get('/', async (req, res) => {
  const { company, companyName } = req.body

  const employeeByCompId = await Employee.find().where({ company: company });
  const employeeByCompName = await Employee.find().where({ companyName: companyName });


  try {
    if (company) {
      res.status(200).json(employeeByCompId)
    }

    if (companyName) {
      res.status(200).json(employeeByCompName)
    }

  }

  catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
})

module.exports = router