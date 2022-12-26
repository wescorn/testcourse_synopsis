

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Questions',
    [
      {
        quizId: '1',
        text: 'Some 1st Question!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: '1',
        text: 'Some 2nd Question!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: '1',
        text: 'Some 3rd Question!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: '1',
        text: 'Some 4th Question!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Questions', null, {}),
};
