"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("UserRoles", "storeId", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Stores",
        key: "id"
      },
      onDelete: "CASCADE"
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("UserRoles", "storeId");
  }
};
