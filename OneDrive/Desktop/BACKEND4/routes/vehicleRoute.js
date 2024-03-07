const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController.js');

router.post("/search", async (req, res, next) => {
    const { plateNumber } = req.body;
    try {
        const vehicle = await vehicleController.search(plateNumber);
        if (vehicle) {
            return res.status(200).json({ result: "Search Successful", vehicle });
        } else {
            return res.status(404).json({ result: "No Vehicle Found" });
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;
