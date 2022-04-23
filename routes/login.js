const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../model/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/', [
  check('email', 'Email required')
    .isEmail(),
  check('password', 'Password required')
    .not()
    .isEmpty()
    .exists()
],
  async (req, res) => {
    const validError = validationResult(req)

    if (!validError.isEmpty()) {
      return res.status(400).json({ errors: validError.array() })
    }

    const { email, password } = req.body

    const user = await User.findOne({ email })
    try {
      if (!user) {
        return res.status(400).json({ msg: 'User not found' })
      }

      const passMatch = await bcrypt.compare(password, user.password)
      if (!passMatch) {
        return res.status(400).json({ msg: 'Password not accepted' })
      }


    } catch (error) {
      res.status(400).json(error)
    }

    /// create jwt!!!
    const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET)

    res.header('auth-token', token).send(token)

  });

module.exports = router