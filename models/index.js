const User = require('./User');
const Trip = require('./Trip');
const Location = require('./Location');
const Activity = require('./Activity');
const Junction = require('./Junction');

/* 
User
  has trips
  has activities

Trip
  belongs to user
  has locations
  has activities

Location
  belongs to trips - maybe remove this 
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

Trip.belongsTo(User, {
  foreignKey: 'user_id'
});

Trip.hasMany(Location, {
  foreignKey: 'trip_id'
});

Location.belongsTo(Trip, {
  foreignKey: 'trip_id'
});

Location.hasMany(Activity, {
  foreignKey: 'location_id'
});

Activity.belongsTo(Location, {
  foreignKey: 'location_id'
});

// User.hasMany(Activity, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Trip.belongsToMany(Location, {
//   through: {
//     model: Junction,
//     unique: false
//   }
// });

// Trip.hasMany(Activity, {
//   foreignKey: 'trip_id', 
//   onDelete: 'CASCADE'
// });

// Location.belongsToMany(Trip, {
//   through: {
//     model: Junction, 
//     unique: false
//   }
// });

// Location.hasMany(Activity, {
//   foreignKey: 'location_id', 
//   onDelete: 'CASCADE'
// });

// Activity.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Activity.belongsTo(Trip, {
//   foreignKey: 'trip_id'
// });

// Activity.belongsTo(Location, {
//   foreignKey: 'location_id'
// });

module.exports = { User, Trip, Location, Activity };
