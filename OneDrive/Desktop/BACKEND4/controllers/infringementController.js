const Vehicle = require('../models/vehicle');
const User = require('../models/User');
const Infringement = require('../models/infringement');

exports.createInfringement = async (req, res) => {
    const { plateNumber, badgeNumber, date, offence } = req.body;

    try {
        const vehicle = await Vehicle.findOne({ where: { plateNumber } });

        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        const officerExists = await User.findOne({ where: { badgeNumber } });

        if (!officerExists) {
            return res.status(404).json({ message: 'Officer not found' });
        }

        const infringement = await Infringement.create({
            badgeNumber,
            ownerName,
            plateNumber,
            date,
            offence,
            pointsDeducted,
            comments,

        }, { include: [User] });

        res.json({ message: 'Infringement created successfully', infringement });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
