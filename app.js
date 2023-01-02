import express from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser';
import cors from 'cors';

import publicRoutes from './src/routes/public';
import apiRoutes from './src/routes/api';
import adminRoutes from './src/routes/admin';
import apiMiddleware from './src/middleware/apiAuth';
import adminMiddleware from './src/middleware/adminAuth';
import errorHandler from './src/middleware/errorHandler';
import { dbConnect } from './src/config/sequelize-connect';
dotenv.config();


export default function(db_setup = dbConnect) {

  db_setup();
  
  const app = express();
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  
  app.use(cors());
  app.use(bodyParser.json());
  app.use('/pub', publicRoutes);
  app.use('/api', apiMiddleware, apiRoutes);
  app.use('/api/admin', apiMiddleware, adminMiddleware, adminRoutes);
  app.use(errorHandler);


  return app;
}