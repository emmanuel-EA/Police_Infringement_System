module.exports = (DataTypes, sequelize) => {
    const Owner = sequelize.define('Owner', {
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
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
        },
        DrivingRecords: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    return Owner;
};
