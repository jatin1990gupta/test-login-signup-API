const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: Number,
  email: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Userdata', userSchema);