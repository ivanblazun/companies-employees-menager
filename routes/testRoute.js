const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')


router.get('/', auth, async (req, res) => {

  await res.send('<h1>this is test route</h1>')
})

module.exports = router

