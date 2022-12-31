const request = require('supertest');


const conn = require('../config/sequelize-connect');
const app = require('../../app');

let authorizationToken;
let UserData;

describe('APIs Testing...', () => {
  test('Register User API...', async () => {
    const res = await request(app)
      .post('/pub/register')
      .send({
        firstName: 'Testing User',
        lastName: 'testing lastname',
        email: 'testing@mailinator.com',
        password: 'TestingPwd',
      });
    UserData = res.body.data;
    expect(res.statusCode).toBe(200);
  });

  test('Login User API...', async () => {
    const res = await request(app)
      .post('/pub/login')
      .send({
        email: 'testing@mailinator.com',
        password: 'TestingPwd',
      });
      console.log('RES', res.body.data);
    authorizationToken = res.body.data.token;
    expect(res.statusCode).toBe(200);
  });

  test('Get All Users API...', async () => {
    const res = await request(app)
      .get('/api/allUsers')
      .set('x-token', authorizationToken);
    expect(res.statusCode).toBe(200);
  });

  /* test('Find one user by Id API...', async () => {
    const res = await request(app)
      .get(`/api/v1/account/users?id=${UserData.id}`)
      .set('authorization', authorizationToken);
    expect(res.statusCode).toBe(200);
  }); */
});

afterAll(async () => {
  try {
    await conn.dbDisconnect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
