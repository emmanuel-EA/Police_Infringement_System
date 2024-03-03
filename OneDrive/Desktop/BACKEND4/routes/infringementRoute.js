const express = require('express');
const router = express.Router();
const infringementController = require('../controllers/infringementController.js');
const authMiddleware = require('../auth/authMiddleware.js');

// Define the POST route for creating a new infringement record
router.post('/', infringementController.createInfringement);

module.exports = router;
