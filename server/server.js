const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./models');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');
const auth = require('./middleware/auth');
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + './../public/index.html'));
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname + './../public/index.html'));
  res.json({ message: 'Make a POST request to /api/auth/signup to signup' });
});

app.use(
  '/api/users/:id/messages',
  auth.loginRequired,
  auth.ensureCorrectUser,
  messageRoutes
);
app.use('/api/auth', authRoutes);
app.get('/api/messages', function(req, res, next) {
  db.Message.find()
    .sort({ createAt: 'desc' })
    .populate('userId', { username: true, profileImage: true })
    .then(function(messages) {
      res.json(messages);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
