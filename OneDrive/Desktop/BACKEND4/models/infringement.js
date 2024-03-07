const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Infringement = db.Sequelize.define(
    "Infringement",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        badgeNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plateNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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
    },
    {
        // Other model options go here
        tableName: 'Infringement'
    }
);

module.exports = Infringement;