const Vehicle = require('../models/Vehicle');
const User = require('../models/User');
const Infringement = require('../models/Infringement');

exports.createInfringement = async (req, res) => {
    const { id, badgeNumber, plateNumber, ownerid, date, pointsDeducted, offense, comments, createdAt, updatedAt } = req.body;

    try {
        const infringement = await Infringement.create({
            id,
            badgeNumber,
            plateNumber,
            ownerid,
            date,
            offense,
            pointsDeducted,
            comments,
            createdAt,
            updatedAt,

        });

        res.json({ message: 'Infringement created successfully', infringement });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
