const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post("/login", async (req, res, next) => {
    const { badgeNumber, password } = req.body;
    try {
        const user = await userController.getUserByBadgeNumber(badgeNumber);
        if (user) {
            if (password === user.password) {
                return res.status(200).json({ result: "Login Successful", user });
            } else {
                return res.status(401).json({ result: "Invalid credentials" });
            }
        }
        else {
            return res.status(404).json({ result: "No User Found" });
        }

    } catch (error) {
        next(error);
    }
});

module.exports = router;
