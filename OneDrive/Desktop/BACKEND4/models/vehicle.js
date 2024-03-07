const { DataTypes } = require('sequelize');
const db = require('../config/database.js');

const Vehicle = db.Sequelize.define('Vehicle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    plateNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    ownerid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    make: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    licenseExpiry: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
});

module.exports = Vehicle;
