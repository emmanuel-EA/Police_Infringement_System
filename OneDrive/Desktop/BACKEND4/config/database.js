"use strict";
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize('police3', 'Emmanuel', 'Jack1994', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = {
    Sequelize: sequelize,
};