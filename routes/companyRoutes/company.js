const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

// Mongo models
const Company = require('../../model/Company');


/// Get company
router.get('/', auth,
  async (req, res) => {
    try {
      const companysList = await Company.find({ user: req.user._id })
      console.log(companysList)
      res.json(companysList)
    } catch (err) {
      console.log(err.message)
      res.status(500).send('server error')
    }
  })

/// Create new company
router.post('/', [auth,
  check('companyName', 'Company name reguired')
    .not()
    .isEmpty(),
  check('owner', 'Owner required')
    .not()
    .isEmpty(),
  check('pin', 'Personal indetification number required')
    .not()
    .isEmpty(),
  check('headquarter', 'Headquarter address is required')
    .not()
    .isEmpty()
],
  async (req, res) => {
    const validError = validationResult(req);

    if (!validError.isEmpty()) {
      return res.status(400).json({ errors: validError.array() })
    }
    const { companyName, owner, pin, headquarter } = req.body

    try {
      const company = new Company({
        companyName: companyName,
        owner: owner,
        pin: pin,
        headquarter: headquarter,
        user: req.user._id
      })
      const saveCompany = await company.save()
      res.json(saveCompany)
    }
    catch (err) {
      console.error(err.message);
      res.status(500).send('Server error')
    }
  });

router.put('/:id', auth, async (req, res) => {
  const { companyName, owner, pin, headquarter } = req.body

  const companyFields = {}

  // prefered changes in object form if empty, changes will be false 
  if (companyName) companyFields.companyName = companyName;
  if (owner) companyFields.owner = owner;
  if (pin) companyFields.pin = pin;
  if (headquarter) companyFields.headquarter = headquarter;

  try {
    // find company by id in request params /:id
    let company = await Company.findById(req.params.id);

    // check does company exist
    if (!company) {
      return res.status(404).json({ msg: 'company not found' });
    }

    // check does user is admin of company
    if (company.user.toString() !== req.user._id) {
      return res.status(401).json({ msg: 'You are not admin of this company' });
    }

    //  actualy apply new data to Company, 
    //  if {new:false} it returns without data update
    company = await Company.findByIdAndUpdate(req.params.id,
      { $set: companyFields },
      { new: true }
    );
    res.send(company)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
})
module.exports = router