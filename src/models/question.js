'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Quiz)
      this.hasMany(models.Answer)
    }
  }
  Question.init({
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};