const express = require('express');
const router = express.Router();
const infringementController = require('../controllers/infringementController.js');

// Define the POST route for creating a new infringement record
router.post('/create', infringementController.createInfringement);

module.exports = router;
