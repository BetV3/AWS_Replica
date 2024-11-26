const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Instance = sequelize.define('Instance', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'running', 'stopped', 'terminated'),
        defaultValue: 'pending',
    },
    // Add other EC2 like attributed such as type, region, tags
}, {
    tableName: 'instances',
    timestamps: true,
});

module.exports = Instance;