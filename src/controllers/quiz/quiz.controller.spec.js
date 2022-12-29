import MockExpressResponse from 'mock-express-response';
import { create } from '/quiz.controller'
import { successResponse } from '../../helpers';

import { quiz } from '../../models';
// mock success and error function mock
jest.mock('./../../helpers');

// extress response object for (req, res) function
const res = new MockExpressResponse();

describe('Quiz controller', () => {
  test('create', async () => {
    //What is .spec ?
    //Dno what this is supposed to be, but I started making unit tests in quiz.test.js
  });
});
