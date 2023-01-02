'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
      this.hasMany(models.Question, { as: 'questions' })
    }
  }
  Quiz.init({
    userId: DataTypes.INTEGER.UNSIGNED,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quiz',
    defaultScope: {
      attributes: { exclude: ['UserId', 'createdAt', 'updatedAt'] },
    }
  });
  return Quiz;
};