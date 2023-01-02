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
jest.spyOn(Helpers, 'successResponse');
jest.spyOn(Helpers, 'errorResponse');





describe('Controller Testing With Mock', () => {

    test('Create Invalid Quiz', async () => {
        const test_data = [
            { data: _test_data.lessThan2Answers, code: 422 },
            { data: _test_data.moreThan4Answers, code: 422 },
            { data: _test_data.lessThan2Questions, code: 422 },
            { data: _test_data.moreThan10Questions, code: 422 },
            { data: _test_data.noCorrectAnswers, code: 422 },
            { data: _test_data.validQuiz, code: 201 },
        ];

        for (const body of test_data) {
            const { res, next, clearMockRes } = getMockRes();
            const req = getMockReq({
                user: { id: 1 },
                params: {},
                body: body.data
            });

            const response = await quizController.create(req, res);

            //check for correct statusCode
           expect(response.status).toHaveBeenCalledWith(body.code); 
        }
        //Check that certain methods have been called the expected amount of times
        expect(Quiz.create).toHaveBeenCalledTimes(1);
        expect(Helpers.successResponse).toHaveBeenCalledTimes(1);
        expect(Helpers.errorResponse).toHaveBeenCalledTimes(5);
    });
});

