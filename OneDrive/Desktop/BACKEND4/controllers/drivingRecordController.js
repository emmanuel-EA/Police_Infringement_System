const DrivingRecord = require('../models/drivingRecord');

// Controller function to get driving record details by ID
exports.getDrivingRecordDetails = async (req, res) => {
    try {
        // Extract the ID from the request parameters
        const { id } = req.params;

        // Fetch the driving record details from the database
        const drivingRecord = await DrivingRecord.findById(id);

        // If driving record not found, return 404 Not Found
        if (!drivingRecord) {
            return res.status(404).json({ message: 'Driving record not found' });
        }

        // If found, return the driving record details
        res.status(200).json(drivingRecord);
    } catch (error) {
        // If an error occurs, return 500 Internal Server Error
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};