const jwt = require('jsonwebtoken')

module.exports = function auth(req, res, next) {
  const auth = req.header('auth-token')

  if (!auth) {
    return res.status(401).json('No correct auth-token')
  }
  try {
    const isVerified = jwt.verify(auth, process.env.TOKEN_SECRET);
    req.user = isVerified

    next()
  } catch (err) {
    res.status(400).send('Server error')

    console.log(err)
  }

}

