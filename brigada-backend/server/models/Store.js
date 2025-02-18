const {DataTypes} = require("sequelize");
const { sequelize} = require("../config/db");

const Store = sequelize.define("Store", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    supervisorId: {
        type: DataTypes.UUID,
        allowNull: true, // Stores might not have managers yet
        references: {
            model: "Users",
            key: "id",
        },
    },
    // Financial andOperational Metrics
    totalSales: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
    },
    totalOrders: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    totalEmployees: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    laborCost: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
    },
    operationalCost: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
    },
    profitMargin: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
    },
    // Performance and Customer Analytics
    lastPerformanceReviewDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    avgCustomerRating: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
        validate: { min: 0, max: 5},
    },
    totalReviews: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    // Employee and Shift Analytics
    totalHoursWorked: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
    },
    // Standard TimeStamps
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

modules.exports = Store;