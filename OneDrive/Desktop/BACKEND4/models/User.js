const bcrypt = require('bcrypt');
const sequelize = require('../config/database.js')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        badgeNumber: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    User.beforeCreate(async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
    });

    return User;
};
