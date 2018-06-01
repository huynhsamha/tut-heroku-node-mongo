const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Post', PostSchema);
