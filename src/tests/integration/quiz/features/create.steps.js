const { beforeEach, afterAll, afterEach } = require('@jest/globals');
const { defineFeature, loadFeature } = require('jest-cucumber');
const path = require('path');
const request = require('supertest');
const jwt = require('jsonwebtoken');
const test_data = require('../../../resources/test_data/test_data');
const feature = loadFeature('./create.feature');

defineFeature(feature, test => {
  const app = require('#app').default();
  let res = null;
  let token = null;

  test('Should not be able to create a Quiz with invalid input', async ({ given, when, then }) => {
    given(/^I am authenticated as (.*)$/, (user_id) => {
      token = jwt.sign(
        {
          user: {
            userId: user_id,
            email: 'admin@gmail.com',
            createdAt: new Date(),
          },
        },
        process.env.SECRET,
      );
    });
    when(/^I attempt to create a quiz with (.*)$/, async (quiz_data) => {
      const data = test_data[quiz_data];
      res = await request(app)
      .post('/api/quiz')
      .set('x-token', token)
      .send(data);
    });

    then(/^I expect a specific response (.*)$/, async (code) => {
      try{
        code = parseInt(code);
      } catch(err) {}
        
      expect(res.statusCode).toBe(code);
    });
  });

});

//Sources
//https://www.npmjs.com/package/jest-cucumber
//https://codesandbox.io/s/domain-driven-hexagon-ftmxr?file=/tests/user/delete-user/delete-user.e2e-spec.ts:581-592