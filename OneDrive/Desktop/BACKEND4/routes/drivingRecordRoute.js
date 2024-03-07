const express = require('express');
const router = express.Router();
const drivingRecordController = require('../controllers/drivingRecordController.js');
const authMiddleware = require('../auth/authMiddleware.js');

// Define route for fetching driving record details
router.get('/get', drivingRecordController.getDrivingRecordDetails);

module.exports = router;
