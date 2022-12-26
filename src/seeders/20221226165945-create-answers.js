

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Answers',
    [
      {
        questionId: '1',
        text: 'Answer 1!',
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: '1',
        text: 'Answer 2!',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: '1',
        text: 'Answer 3!',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: '1',
        text: 'Answer 4!',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        questionId: '2',
        text: 'Some Answer 1!',
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: '2',
        text: 'Some Answer 2!',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Answers', null, {}),
};
