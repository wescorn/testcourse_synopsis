import create_test_data01 from "./resources/testDataResources/1_lessThan2Answers.json"
import create_test_data02 from "./resources/testDataResources/2_moreThan4Answers.json"
import create_test_data03 from "./resources/testDataResources/3_lessThan2Questions.json"
import create_test_data04 from "./resources/testDataResources/4_moreThan10Questions.json"
import create_test_data05 from "./resources/testDataResources/5_noCorrectAnswers.json"
import create_test_data06 from "./resources/testDataResources/6_validQuiz.json"
import jwt from 'jsonwebtoken';

const request = require('supertest');

const conn = require('../config/sequelize-connect');
const app = require('../../app');

describe('APIs Testing...', () => {
  test('Create Quiz', async () => {

    const token = jwt.sign(
        {
            user: {
                userId: 1,
                email: "admin@gmail.com",
                createdAt: new Date(),
            },
        },
        process.env.SECRET,
    );

    const test_data = [
      {data: create_test_data01, code: 422},
      {data: create_test_data02, code: 422},
      {data: create_test_data03, code: 422},
      {data: create_test_data04, code: 422},
      {data: create_test_data05, code: 422},
      {data: create_test_data06, code: 201},
    ];

    for (const body of test_data){
      const res = await request(app)
      .post('/api/quiz')
      .set('x-token', token)
      .send({
        userId: 1,
        name: body.data.name,
        description: body.data.description,
        questions: body.data.questions
      });
      expect(res.statusCode).toBe(body.data.code);
    }
  });
});

afterAll(async () => {
  try {
    await conn.dbDisconnect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
