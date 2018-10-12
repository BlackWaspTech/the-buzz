const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  address: {},
  profileImage: {
    type: String
  },
  biography: {
    type: String
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
