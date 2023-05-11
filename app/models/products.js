'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsTo(models.category, {
        foreignKey: 'category_id',
      });
      products.hasMany(models.cart, {
        foreignKey: 'product_id',
      });
    }
  }
  products.init({
    name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    image: DataTypes.STRING,
    shop: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};