var express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find({}, '-password')
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
});

module.exports = router;
