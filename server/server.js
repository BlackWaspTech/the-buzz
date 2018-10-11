const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + './../public/index.html'));
app.use(express.static(__dirname + 'assets'));

app.get('/', (req, res) => {
  res.send('Up and At Them!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
