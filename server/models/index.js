const mongoose = require('mongoose');
const User = require('./user');
const Message = require('./message');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect(
  'mongodb://localhost/thebuzz',
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
  }
);

module.exports = {
  User,
  Message
};
