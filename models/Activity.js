const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Activity extends Model {}

Activity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        image_URL: {
            type: DataTypes.STRING,
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'activity',
    }
);

module.exports = Activity;