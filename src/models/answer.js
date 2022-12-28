'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Question, { foreignKey: 'questionId' })
    }
  }
  Answer.init({
    questionId: DataTypes.INTEGER.UNSIGNED,
    text: DataTypes.STRING,
    isCorrect: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Answer',
    defaultScope: {
      attributes: { exclude: ['QuestionId', 'createdAt', 'updatedAt'] }
    }
  });
  return Answer;
};