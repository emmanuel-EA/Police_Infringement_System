const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const DrivingRecord = sequelize.define('DrivingRecord', {
        offense: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateOfOffense: {
            type: DataTypes.DATEONLY,
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

    return DrivingRecord;
};