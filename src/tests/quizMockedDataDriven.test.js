import { getMockReq, getMockRes } from '@jest-mock/express';
import * as _test_data from './resources/test_data/test_data';
import * as quizController from '../controllers/quiz/quiz.controller';
import { Quiz } from '../models/index';
import * as Helpers from '../helpers/index';

//We mock the models/index file, cuz this is where we're actually importing Quiz from,
// not from the /models/quiz file itself
jest.mock('../models/index', () => ({
  Quiz: ({
    create: jest.fn()
  })
}));

jest.spyOn(Quiz, 'create');
//jest.spyOn(Helpers, 'successResponse');
//jest.spyOn(Helpers, 'errorResponse');

describe('Controller Testing With Mock', () => {

    test.each`
    data                                | expectedCode | expSuccessResCalls   | expErrorResCalls 
    ${_test_data.lessThan2Answers}      | ${422}       | ${0}                 | ${1}
    ${_test_data.moreThan4Answers}      | ${422}       | ${0}                 | ${1}
    ${_test_data.lessThan2Questions}    | ${422}       | ${0}                 | ${1}
    ${_test_data.moreThan10Questions}   | ${422}       | ${0}                 | ${1}
    ${_test_data.noCorrectAnswers}      | ${422}       | ${0}                 | ${1} 
    ${_test_data.validQuiz}             | ${201}       | ${1}                 | ${0}
  `('$data should cause return of the $expectedCode', async ({ data, expectedCode, expSuccessResCalls, expErrorResCalls }) => {
    const { res } = getMockRes();
    const req = getMockReq({
        user: { id: 1 },
        params: {},
        body: data
    });

    const response = await quizController.create(req, res);
    //check for correct statusCode
    expect(response.status).toHaveBeenCalledWith(expectedCode);
    expect(Quiz.create).toHaveBeenCalledTimes(expSuccessResCalls);
    //expect(Helpers.successResponse).toHaveBeenCalledTimes(expSuccessResCalls);
    //expect(Helpers.errorResponse).toHaveBeenCalledTimes(expErrorResCalls);
  });

});

