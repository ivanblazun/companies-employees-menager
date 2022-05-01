const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Mongo Models
const Company = require('../../model/Company');
const Employee = require('../../model/Employee')



///////// employees are find by Company id,.. 
///////// that must be delivered in req.headers!!!!!!


// get employees @route-private
router.get('/', auth,
  async (req, res) => {
    const { _id, company } = req.body

    try {
      const employee = await Employee.findById(_id)

      // check ih employee exist
      if (!employee) {
        return res.status(400).json({ msg: 'employee not found' })
      }

      // check if employee match to company
      if (employee.company.toString() !== company) {
        return res.status(400).json({ msg: 'Employee dont match to company!' })
      }

      console.log(employee)
      res.status(200).json({ employee: employee })
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ msg: 'Server error' })
    }
  })

// create employee @route-private
router.post('/', auth,
  async (req, res) => {

    const { firstName, lastName } = req.body

    try {
      // check does employee match company
      let company = await Company.findById(req.header('CompanyId'))
      let companyName = await company.companyName
      if (!company) {
        return res.status(400).json({ msg: 'Employee cannot be created, invalid compan!' })
      }

      const employee = new Employee({
        firstName: firstName,
        lastName: lastName,
        company: req.header('CompanyId'),
        companyName: companyName
      })

      const saveEmployee = await employee.save()

      res.status(200).json({ msg: employee })

      console.log(companyName, saveEmployee)
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ msg: 'server error' })
    }
  })

// update employee @route-private
router.put('/:id', auth,
  async (req, res) => {
    const {
      firstName,
      lastname,
      company,
      penInsurance,
      companyName,
      salaryList,
      salary
    } = req.body

    const employeeFields = {}

    // prefered changes in object form if empty, changes will be false 
    if (companyName) employeeFields.companyName = companyName;
    if (firstName) employeeFields.firstName = firstName;
    if (lastname) employeeFields.lastname = lastname;
    if (company) employeeFields.company = company;
    if (penInsurance) employeeFields.penInsurance = penInsurance;
    if (salaryList) employeeFields.salaryList = salaryList;
    if (salary) employeeFields.salary = salary;

    try {

      // check does employee exist
      let employee = await Employee.findById(req.params.id)
      if (!employee) {
        return res.status(400).json({ msg: 'employee not found' })
      }

      // check does employee match company
      let company = await Company.findById(req.header('CompanyId'))
      let companyName = await company.companyName
      if (!company) {
        return res.status(400).json({ msg: 'Employee cannot be updated, invalid company!' })
      }

      //  actualy apply new data to Employee, 
      //  if {new:false} it returns without data update
      employee = await Employee.findByIdAndUpdate(req.params.id,
        { $set: employeeFields },
        { new: true }
      );
      return res.status(200).send(employee)

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  })


module.exports = router