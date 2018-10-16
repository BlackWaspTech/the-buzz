const mongoose = require('mongoose');
const User = require('../users/model');

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      maxLength: 160
    },
    userId: {
      type: String,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

messageSchema.pre('remove', function(next) {
  User.findById(this.userId)
    .then(user => {
      user.messages.remove(this.id);
      user.save().then(function(e) {
        next();
      });
    })
    .catch(function(err) {
      next(err);
    });
});

module.exports = mongoose.model('Message', messageSchema);
