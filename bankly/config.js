/** Shared config for application; can be req'd many places. */

// Load environment variables from .env file
require('dotenv').config(); // Fixed: Added .config() to properly load environment variables

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 10;

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql:///bankly_test' // Default for test environment; adjust as needed
    : 'postgresql:///bankly';     // Default for other environments; adjust as needed

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};


