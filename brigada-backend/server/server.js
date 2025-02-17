require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB, disconnectDB } = require("./config/db");

const app = express();
app.use(
    cors({
        origin: "*",
        methods: "GET, POST, PUT, DELETE",
        allowedHeaders: "Content-Type, Authorization",
})
);
app.use(express.json());

app.get("/" , (req, res) => {
    res.send("App is running...");
})

connectDB();

sequalize.sync({ force: false }).then(() => {
    console.log("Database synchronized.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));