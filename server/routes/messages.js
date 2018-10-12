var express = require('express');
var router = express.Router({ mergeParams: true });
var db = require('../models');
var messageController = require('../controllers/messageController');

router.post('/', messageController.createMessage);

module.exports = router;
