'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mobil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mobil.init({
    merekMobil: DataTypes.STRING,
    tipeMobil: DataTypes.STRING,
    warna: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mobil',
  });
  return Mobil;
};