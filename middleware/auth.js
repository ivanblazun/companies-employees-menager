module.exports = function (req, res, next) {
  const auth = req.header('auth')


  if (!auth) {
    console.log(auth)
    return res.send('No correct auth')
  } else {
    next()
  }
}