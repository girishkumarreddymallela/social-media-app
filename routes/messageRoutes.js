const express = require('express');
const authenticateToken = require('../controllers/middleware');
const messageController = require('../controllers/messageController'); // adjust the path according to your project structure
const msC = require('../controllers/msC');
const router = express.Router();
const mqC = require('../controllers/mqC');
const mqsC = require('../controllers/mqsC');
const mwtsC = require('../controllers/mwtsC');

router.post('/add', authenticateToken, messageController.addMessage);
router.get('/send', authenticateToken, msC.sendMessage);
router.post('/query', authenticateToken, mqC.saveQuery);
router.get('/query', authenticateToken, mqsC.sendQuiries);
router.post('/search', authenticateToken, mwtsC. sendMessageWhenSearch);



module.exports = router;
