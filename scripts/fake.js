require('dotenv').config();
require('../models');

const async = require('async');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Post = mongoose.model('Post');

const users = [];
for (let i = 0; i < 15; i++) {
  users.push({ username: 'username_' + i, password: 'password_' + i });
}

async.eachSeries(users, (_user, cb) => {
  const user = new User(_user);
  user.save().then(user => {
    const posts = [];
    const num_posts = Math.floor(Math.random() * 6);
    for (let i = 0; i < num_posts; i++) {
      posts.push({
        title: 'Post ' + i + ' of user ' + user.id,
        content: 'something here',
        user: user._id
      });
    }
    async.eachSeries(posts, (_post, cb) => {
      const post = new Post(_post);
      post.save().then(post => cb()).catch(err => cb(err));
    }, (err) => cb(err))
  })
    .catch(err => cb(err))
}, (err) => {
  if (err) { console.log(err); process.exit(0); }
  console.log('Fake successfully');
  process.exit(0);
});
