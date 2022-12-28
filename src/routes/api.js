import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';
import * as quizController from '../controllers/quiz/quiz.controller';
import * as quizValidator from '../controllers/quiz/quiz.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/me', userController.profile);
router.post(
  '/changePassword',
  validate(userValidator.changePassword),
  userController.changePassword,
);
router.get('/allUsers', userController.allUsers);

router.get('/quiz', quizController.index);
router.get('/quiz/:id', quizController.get);
router.post('/quiz', validate(quizValidator.create), quizController.create),
router.put('/quiz/:id', quizController.update);
router.delete('/quiz/:id', quizController.destroy);
module.exports = router;
