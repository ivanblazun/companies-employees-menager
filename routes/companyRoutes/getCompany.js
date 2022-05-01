const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Company = require('../../model/Company');


/// Get company
router.get('/'), (req, res) => {
  try {
    // const companysList = await Company.find({ user: req.user.id })
    // console.log(companysList)
    res.send('hited')
  } catch (err) {
    console.log(err.message)
    res.status(500).send('server error')
  }

}
module.exports = router