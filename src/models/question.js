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
      this.belongsTo(models.Quiz, { foreignKey: 'quizId' })
      this.hasMany(models.Answer)
    }
  }
  Question.init({
    quizId: DataTypes.INTEGER.UNSIGNED,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
    defaultScope: {
      attributes: { exclude: ['QuizId', 'createdAt', 'updatedAt'] },
    }
  });
  return Question;
};