'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.status_order, {
        foreignKey: 'status_id'
      })
      order.belongsTo(models.users, {
        foreignKey: 'user_id'
      })
    }
  }
  order.init({
    user_id: DataTypes.INTEGER,
    total_item: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    Address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};