'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.fn("gen_random_uuid"),
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      storeId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Stores",
          key: "id",
        },
        onDeleted: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
  }
};