const express = require('express');
const router = express.Router();

/* ping */
router.get('/ping', (req, res) =>
  res.send({ ping: 'ok', route: '/auth/ping' })
);

module.exports = router;
