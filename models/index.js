const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const config = require('../config');

fs.readdirSync(path.join(__dirname, './')).forEach((file) => {
  if (file.indexOf('index') == -1) {
    require(path.join(__dirname, file));
  }
});

module.exports = new Promise((resolve, reject) => {
  mongoose.connect(config.uriMongo, (err) => {
    if (err) return reject(err);
    console.log('Mongo is connected');
    return resolve();
  });
});
