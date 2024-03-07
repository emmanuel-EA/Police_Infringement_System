const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController.js');

router.post("/details", async (req, res, next) => {
    const { FirstName, LastName } = req.body;
    try {
        const owner = await ownerController.getOwnerByName(FirstName, LastName);
        if (owner) {
            return res.status(200).json({ result: "Owner Found", owner });
        } else {
            // If no owner is found, return back to input vehicle plate number
            return res.status(404).json({ result: "No Owner Found" });
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;

