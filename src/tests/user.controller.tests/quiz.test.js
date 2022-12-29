import create_test_data01 from "../../test_data/create_quiz_test1.json"
import jwt from 'jsonwebtoken';

const request = require('supertest');

const conn = require('../../config/sequelize-connect');
const app = require('../../../app');

describe('APIs Testing...', () => {
  test('Create Quiz', async () => {

    const token = jwt.sign(
        {
            user: {
                userId: 1,
                email: "example@example.com",
                createdAt: new Date(),
            },
        },
        process.env.SECRET,
    );

    const res = await request(app)
      .post('/api/quiz')
      .set('x-token', token)
      .send(create_test_data01);
    expect(res.statusCode).toBe(200);
  });
});

// afterAll(async () => {
//   try {
//     await conn.dbDisconnect();
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// });
