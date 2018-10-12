const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

/* ping */
router.get('/ping', (_, res) =>
  res.send({ ping: 'ok', route: '/api/users/ping' })
);

/* Get All */
router.get('/', controllers.getAllUsers);

/* Create */
router.post('/', controllers.createUser);

/* Get One */
router.get('/user/:username', controllers.findUserByUsername);
router.get('/:id', controllers.findUserById);

/* Update */
router.patch('/:id', controllers.updateUserById);

/* Delete */
router.delete('/:id', controllers.deleteUserById);

module.exports = router;
