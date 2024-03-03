const Owner = require('../models/Owner');

exports.getOwnerDetails = async (req, res) => {
    const { firstName, lastName } = req.body;

    try {
        const owner = await Owner.findOne({ where: { firstName, lastName } });

        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }

        res.render('ownerDetails', { owner });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
