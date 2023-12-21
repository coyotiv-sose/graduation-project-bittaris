const express = require('express')
const router = express.Router()
const User = require('../user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list)
})

/* (POST)Create a new user. */
router.post('/', function (req, res, next) {
  const user = User.create({
    username: req.body.username,
    cart: req.body.cart,
  }) // this way the route handler ignores the other parameters and only sends name. Security concern.
  res.send(user)
})
/* DELETE a user */
router.delete('/:username', function (req, res, next) {
  const { username } = req.params //instead of const username = req.params.username

  User.deleteUserbyUsername(username)

  res.sendStatus(200)
})

module.exports = router
