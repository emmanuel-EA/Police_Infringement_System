const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const jwt = require('jsonwebtoken');

router.post("/auth/login", async (req, res, next) => {
    try {
        const user = await userController.getUserByBadgeNumber(req.body.badgenumber);
        if (user && (await bcrypt.compare(req.body.password, user.password))) {
            // Passwords match - create token
            const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY, {
                expiresIn: '1h',
            });
            const data = { token: token, user: user }
            res.send({ result: 200, data: data });
        } else {
            res.status(404).json({ result: 404, message: "User not found" });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
