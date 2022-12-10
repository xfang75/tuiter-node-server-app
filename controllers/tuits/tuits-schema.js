import mongoose from 'mongoose';

const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  disliked: Boolean,
  userName: String,
  handle: String,
  image: String,
  time: String,
  replies: Number,
  retuits: Number,

}, {collection: 'tuits'});

export default schema;