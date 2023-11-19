//CC means comment controller
const express = require('express');
const router = express.Router();
const authenticateToken = require('../controllers/middleware');
const CC = require('../controllers/CC'); 


//routes----------------
router.post('/add', authenticateToken, CC.addComment);
router.post('/send', authenticateToken, CC.getComments);
module.exports = router;



