import { getMockReq, getMockRes } from '@jest-mock/express';
import * as _test_data from '../tests/resources/test_data/test_data';
import * as quizController from '../controllers/quiz/quiz.controller';


const mockCreate = jest.fn().mockImplementation(
    () => {
        console.log('CALLED FOR SURE');
    }
);
//const Quiz = require('../models/quiz');

jest.mock('../models/index', () => ({
  quiz: jest.fn()
}));

jest.mock('../models/quiz', 
() => jest.fn().mockImplementation(
    () => ({
      create: mockCreate,
    }),
));

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
            
           // expect(respon.statusCode).toBe(body.code);
        }
        expect(mockCreate).toHaveBeenCalledTimes(1);

    });
});

