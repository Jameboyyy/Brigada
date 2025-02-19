import "dotenv/config";
import express from "express";
import cors from "cors";
import User from "./models/User.js";
import Store from "./models/Store.js";
import Shift from "./models/Shift.js";

const app = express();

app.use(cors({
    origin: "*",
    credentials: true,
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("App is running...");
});

// Sync only Store first
const syncDatabase = async () => {
    try {
        await User.sync({ alter: true });
        console.log("✅ User Table Created.");
        await Store.sync({ alter: true });
        console.log("✅ Store Table Created.");
        await Shift.sync({ alter: true });
        console.log("✅ Shift Table Created.");
    } catch (error) {
        console.error("❌ Error syncing database:", error);
    }
};

syncDatabase();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
