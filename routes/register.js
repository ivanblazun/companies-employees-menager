const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const mongoose = require('mongoose')

// User model
const User = require('../model/User')


router.post('/', auth, async (req, res) => {

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
