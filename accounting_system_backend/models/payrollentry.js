'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PayrollEntry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PayrollEntry.init({
    employee_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    amount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'PayrollEntry',
  });
  return PayrollEntry;
};