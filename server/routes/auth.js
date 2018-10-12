var express = require('express');
var router = express.Router();
var db = require('../models');
var jwt = require('jsonwebtoken');
var authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/signup', authController.signup);

module.exports = router;
