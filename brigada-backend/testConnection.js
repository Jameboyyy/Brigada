require("dotenv").config();
const { sequelize, User } = require("./models");

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

        const users = await User.findAll();
        console.log("Users Found:", users.map(user => user.toJSON()));

        const newUser = await User.create({
            firstName: "John",
            lastName: "Doe",
            email: "2Fb9d@example.com",
            password: "password",
            isActive: true
        });
        console.log("User Created:", newUser.toJSON());

    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();