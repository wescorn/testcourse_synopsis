import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';
import { Quiz, Question, Answer } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';

export const allQuizzes = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 2;
    const quizzes = await Quiz.findAndCountAll({
      order: [['createdAt', 'DESC'], ['name', 'ASC']],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { quizzes });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const findById = async (req, res) => {
  try {
    const param = { ...req.body, ...req.params, ...req.query };

    const quiz = await Quiz.findOne({ 
      where: { id: param.id }, 
      include: [{ 
        model: Question, 
        include: [{ 
          model: Answer}] 
        }] 
      });

    if (!quiz) return errorResponse(req, res, DATA_DOES_NOT_EXIST, 400);
    quiz.getUser().then(res => {console.log(res)})

    return successResponse(req, res, quiz);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const createQuiz = async (req, res) => {
  try {
    const {
      name, description, questions,
    } = req.body;

    const payload = {
      name,
      description,
      questions,
    };

    const newQuiz = await Quiz.create(payload);
    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
