const mongoose = require('mongoose');

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

module.exports.User = require('./user');
module.exports.Message = require('./message');
