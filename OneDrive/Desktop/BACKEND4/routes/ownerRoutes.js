const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController.js');
const { authenticateUser } = require('../auth/authMiddleware.js');

router.post('/details', ownerController.getOwnerDetails);

module.exports = router;
