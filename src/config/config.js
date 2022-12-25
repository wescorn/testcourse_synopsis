require('dotenv').config();

const x = {
  development: {
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'testcourse_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3307
  },
  test: {
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'testcourse_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3307
  },
  production: {
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'testcourse_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3307
  },
};
module.exports = x;
