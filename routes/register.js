const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


// User model
const User = require('../model/User');

router.post('/', [
  check('name', 'Name is required and it must contain 5 chars')
    .isLength(5)
    .not()
    .isEmpty(),
  check('email', 'Email is required')
    .not()
    .isEmpty()
    .isEmail(),
  check('password', 'Password is required and it must contain min 6 chars')
    .isLength(6)
    .not()
    .isEmpty()
],
  async (req, res) => {

    // validating
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() })
    }

    // does user exist by email exist check???!!!!
    const emailExistCheck = await User.findOne({ email: req.body.email })
    if (emailExistCheck) {
      return res.status(400).json({ msg: 'Email is alredy registered' })
    }

    // user object create
    const user = await new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })

    // hash password 
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    try {
      const savedUser = await user.save()
      res.send(savedUser)

    } catch (err) {
      res.status(400).send(err)
      console.log(err)
    }
  })

module.exports = router
