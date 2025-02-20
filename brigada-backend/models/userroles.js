'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserRoles.belongsTo(models.User, { foreignKey: "userId" });
      UserRoles.belongsTo(models.Role, { foreignKey: "roleId" });
      UserRoles.belongsTo(models.Store, { foreignKey: "storeId" });
    }
  }
  UserRoles.init({
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE'
    },
    roleId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id',
      },
      onDelete: 'CASCADE'
    },
    storeId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Stores',
        key: 'id',
      },
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'UserRoles',
  });
  return UserRoles;
};