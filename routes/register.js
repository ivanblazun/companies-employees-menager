const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const auth = require('../middleware/auth')
const mongoose = require('mongoose')

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
    const error = validationResult(req)

    console.log(error)

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() })
    }

    const user = await new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    console.log(user)
    try {
      const savedUser = await user.save()

      res.send(savedUser)

    } catch (err) {
      res.status(400).send(err)
      console.log(err)
    }

  })

module.exports = router
