require('dotenv').config();
const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.uriMongo)
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => { console.log('Drop database OK'); process.exit(0); })
  .catch(err => { console.log(err); process.exit(0); })
