const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Owner = db.Sequelize.define(
    "Owner",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        LicenseNumber: {
            type: DataTypes.STRING,
            unique: true,
        },
        DateOfBirth: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Height: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DemeritPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        // Other model options go here
        tableName: 'Owner'
    }
);

module.exports = Owner;