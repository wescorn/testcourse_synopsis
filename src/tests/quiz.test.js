import * as _test_data from '../tests/resources/test_data/test_data';
import jwt from 'jsonwebtoken';

const request = require('supertest');

const conn = require('../config/sequelize-connect');
const app = require('../../app').default();

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
      {data: _test_data.lessThan2Answers, code: 422},
      {data: _test_data.moreThan4Answers, code: 422},
      {data: _test_data.lessThan2Questions, code: 422},
      {data: _test_data.moreThan10Questions, code: 422},
      {data: _test_data.noCorrectAnswers, code: 422},
      {data: _test_data.validQuiz, code: 201},
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
      expect(res.statusCode).toBe(body.code);
    }
  });
});


