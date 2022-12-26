

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Quizzes',
    [
      {
        userId: 2,
        name: 'First Quiz',
        description: 'My First Quiz!!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        name: 'Second Quiz',
        description: 'My Second Quiz!!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Quizzes', null, {}),
};
