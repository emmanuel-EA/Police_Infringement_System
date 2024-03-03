// Assuming you have models set up for Sequelize
const Vehicle = require('../models/vehicle');
const Owner = require('../models/Owner');
const { Op } = require('sequelize');

// New method for search
exports.search = async (req, res) => {
    const { searchInput, searchType } = req.body;

    try {
        if (!searchInput || !searchType) {
            return res.status(400).json({ message: 'Invalid search parameters. Please provide both searchInput and searchType.' });
        }

        if (searchType === 'plateNumber') {
            const vehicle = await Vehicle.findOne({ where: { plateNumber: searchInput } });
            if (vehicle) {
                return res.json(vehicle);
            } else {
                return res.status(404).json({ message: 'Vehicle not found' });
            }
        } else if (searchType === 'ownerName') {
            const [firstName, lastName] = searchInput.split(' '); // Simple split, adjust as needed
            const owner = await Owner.findOne({
                where: {
                    firstName: { [Op.like]: `%${firstName}%` },
                    lastName: { [Op.like]: `%${lastName}%` },
                },
                include: [Vehicle]
            });
            if (owner) {
                return res.json(owner);
            } else {
                return res.status(404).json({ message: 'Owner not found' });
            }
        } else {
            return res.status(400).json({ message: 'Invalid search type. Supported search types are "plateNumber" and "ownerName".' });
        }
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ message: 'An error occurred during the search.' });
    }
};
