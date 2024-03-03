const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Infringement = sequelize.define('Infringement', {
        badgeNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plateNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        offense: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pointsDeducted: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comments: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    });

    return Infringement;
};