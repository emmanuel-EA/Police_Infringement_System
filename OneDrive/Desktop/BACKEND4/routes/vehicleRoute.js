const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController.js');
const infringementController = require('../controllers/infringementController.js')
const authMiddleware = require('../auth/authMiddleware.js');

router.post('/search', authMiddleware, vehicleController.search);
router.post('/infringement', infringementController.createInfringement);
module.exports = router;
