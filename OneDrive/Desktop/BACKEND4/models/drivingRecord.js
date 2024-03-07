const { DataTypes } = require('sequelize');
const db = require('../config/database');

const DrivingRecord = db.Sequelize.define(
    "DrivingRecord",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dateOfOffense: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        ownerid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        pointsDeducted: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comments: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        // Other model options go here
        tableName: 'DrivingRecord'
    }
);

module.exports = DrivingRecord;