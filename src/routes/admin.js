import express from 'express';
import * as userController from '../controllers/user/user.controller';

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
//router.get('/allUsers', userController.allUsers); //moved this to api so admin is not needed c:

module.exports = router;
