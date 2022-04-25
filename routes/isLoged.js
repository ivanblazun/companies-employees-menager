const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../model/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/', auth, (req, res) => {
  // const user= User.findById()

  res.send('logged in')

  console.log(req.headers)
})

module.exports = router