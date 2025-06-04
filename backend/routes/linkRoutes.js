const express = require('express');
const router = express.Router();
const { handleLinkSubmit } = require('../controllers/linkController');

router.post('/submit', handleLinkSubmit);

module.exports = router;
