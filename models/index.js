const User = require('./User');
const Trip = require('./Trip');
const Location = require('./Location');
const Activity = require('./Activity');

/* 
User
  has trips
  has activities

Trip
  belongs to user
  has locations
  has activities

Location
  belongs to trips
  has activities

Activity
  belongs to user
  belongs to trip
  belongs to locations
*/

User.hasMany(Trip, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Activity, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Trip.belongsTo(User, {
  foreignKey: 'user_id'
})

Trip.hasMany(Location, {
  foreignKey: 'trip_id', 
})

Trip.hasMany(Activity, {
  foreignKey: 'trip_id', 
  onDelete: 'CASCADE'
});

Location.belongsTo(Trip, {
  foreignKey: 'trip_id'
});

Location.hasMany(Activity, {
  foreignKey: 'location_id', 
  onDelete: 'CASCADE'
});

Activity.belongsTo(User, {
  foreignKey: 'user_id'
});

Activity.belongsTo(Trip, {
  foreignKey: 'trip_id'
});

Activity.belongsTo(Location, {
  foreignKey: 'location_id'
});

module.exports = { User, Trip, Location, Activity };
