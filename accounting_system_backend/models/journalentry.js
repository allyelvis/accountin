'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JournalEntry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JournalEntry.init({
    transaction_id: DataTypes.INTEGER,
    account_id: DataTypes.INTEGER,
    debit: DataTypes.DECIMAL,
    credit: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'JournalEntry',
  });
  return JournalEntry;
};