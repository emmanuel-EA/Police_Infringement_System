const Owner = require('../models/Owner');

const getOwnerByName = async (FirstName, LastName) => {
    // Check if both FirstName and LastName are provided and not undefined
    if (!FirstName || !LastName) {
        console.error('FirstName or LastName is undefined');
        return null;
    }
    const owner = await Owner.findOne({ where: { FirstName: FirstName, LastName: LastName } });
    return owner;
};

module.exports = {
    getOwnerByName,
};
