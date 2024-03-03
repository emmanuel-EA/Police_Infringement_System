const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Owner = require('./Owner.js');
const Infringement = require('./infringement.js');


module.exports = (sequelize) => {
    const Vehicle = sequelize.define('Vehicle', {
        plateNumber: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
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
    });

    Vehicle.belongsTo(Owner);


    return Vehicle;
};