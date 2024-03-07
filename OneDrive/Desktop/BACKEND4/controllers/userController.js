const User = require("../models/User");
const bcrypt = require('bcrypt');

const getUserByBadgeNumber = async (badgeNumber) => {
    const user = await User.findOne({ where: { BadgeNumber: badgeNumber } });
    return user;
};

module.exports = {
    getUserByBadgeNumber,
};
