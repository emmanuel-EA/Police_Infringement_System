const User = require("../models/User");


const getUser = async (id) => {
    const data = await User.findOne({ where: { id: id }, raw: true });
    return data;
};

const getUserByBadgeNumber = async (badgenumber) => {
    const data = await User.findOne({ where: { badgeNumber: badgenumber }, raw: true });
    return data;
};


module.exports = {
    getUser,
    getUserByBadgeNumber,

};
