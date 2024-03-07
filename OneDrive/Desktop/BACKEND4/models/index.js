const DrivingRecord = require('./DrivingRecord');
const Infringement = require('./Infringement');
const Owner = require('./Owner');
const Vehicle = require('./Vehicle');
const User = require('./User');

async function init() {
    // create relationships between models
    Owner.hasMany(Vehicle, { foreignKey: { name: 'ownerid' } });
    Vehicle.belongsTo(Owner, { foreignKey: 'ownerid' });

    Owner.hasMany(Infringement, { foreignKey: { name: 'ownerid' } });
    Infringement.belongsTo(Owner, { foreignKey: 'ownerid' });

    Owner.hasMany(DrivingRecord, { foreignKey: { name: 'ownerid' } });
    DrivingRecord.belongsTo(Owner, { foreignKey: 'ownerid' });




    // sync all models with database
    await DrivingRecord.sync();
    await User.sync();
    await Infringement.sync();
    await Owner.sync();
    await Vehicle.sync();
}

module.exports = {
    init,
};