const Vehicle = require('../models/Vehicle');

const search = async (plateNumber) => {
    try {
        const vehicle = await Vehicle.findOne({ where: { plateNumber } });
        return vehicle;
    } catch (error) {
        throw error; // Propagate the error to be handled by the route
    }
};

module.exports = {
    search,
};
