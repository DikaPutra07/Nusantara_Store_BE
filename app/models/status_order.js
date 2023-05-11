'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      status_order.hasMany(models.order, {
        foreignKey: "status_id",
      });
    }
  }
  status_order.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'status_order',
  });
  return status_order;
};