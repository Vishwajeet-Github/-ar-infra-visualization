const dotenv = require('dotenv');

dotenv.config();

const requiredEnvVars = ['PORT', 'NODE_ENV'];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

module.exports = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  clientUrl: process.env.CLIENT_URL,
};