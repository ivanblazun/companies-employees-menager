const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')


router.get('/', auth, (req, res) => {

  res.send('<h1>this is test route</h1>')
})

module.exports = router

