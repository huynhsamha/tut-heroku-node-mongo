var express = require('express');
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

var router = express.Router();

/* GET posts listing. */
router.get('/', function (req, res, next) {
  Post.find().populate('user', '-password').exec()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
});

module.exports = router;
