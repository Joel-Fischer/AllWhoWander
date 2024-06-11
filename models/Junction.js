const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Junction extends Model {}

Junction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id',
            },
        },
        trip_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'trip',
              key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'junction',
    }
);

module.exports = Junction;