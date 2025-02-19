import "dotenv/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "postgres",
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    logging: false,  // Prevents unnecessary logs
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ PostgreSQL connected to", process.env.DB_NAME);
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
};

export { sequelize, connectDB };
