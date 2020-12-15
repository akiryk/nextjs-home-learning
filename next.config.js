const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

// look at .env file and load all variables in the environment
dotenvLoad();

// create a plugin with the environment variables loaded into it
const withEnv = nextEnv();

// extend the basic next config with our withEnv additions
module.exports = withEnv();
