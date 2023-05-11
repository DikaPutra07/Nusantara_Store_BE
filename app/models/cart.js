'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart.belongsTo(models.users, {
        foreignKey: 'user_id',
      });
      cart.belongsTo(models.products, {
        foreignKey: 'product_id',
      });
    }
  }
  cart.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    product_image: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    shop: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};