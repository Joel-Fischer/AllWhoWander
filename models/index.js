const User = require('./User');
const Trip = require('./Trip');
const Location = require('./Location');
const Activity = require('./Activity');

/* 
User
  has trips

Trip
  belongs to user
  has locations

Location
  belongs to trip
  has activities

Activity
  belongs to location
*/

User.hasMany(Trip, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Trip.belongsTo(User, {
  foreignKey: 'user_id'
});

Trip.hasMany(Location, {
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

Activity.belongsTo(Location, {
  foreignKey: 'location_id'
});

module.exports = { User, Trip, Location, Activity };
