const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + './../public/index.html'));
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname + './../public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
