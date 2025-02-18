require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        logging: false,
    },
);

const connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log("PostgreSQL connect to ", process.env.DB_NAME);
    } catch (error) {
        console.log("Database connection failed", error)
        process.exit(1);
    }
};

const disconnectDB = async() => {
    try {
        await sequelize.close();
        console.log("PostgreSQL connection closed");
    } catch (error) {
        console.log("Database connection failed", error)
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB,  disconnectDB};