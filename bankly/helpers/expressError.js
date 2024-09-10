/**
 * ExpressError extends the normal JS error so we can easily
 * add a status when we make an instance of it.
 *
 * Since we are using JSONSchema and will return an array of
 * errors we want to make sure we display that properly
 * The error-handling middleware will return this.
 */

class ExpressError extends Error {
  constructor(message, status) {
    super(message); // Fixed: Pass message to the parent Error constructor
    this.status = status;
    if (process.env.NODE_ENV !== "test") {
      console.error(this.stack); // Log stack trace if not in test environment
    }
  }
}


// Fix Error for BadRequestError and initialization
class BadRequestError extends ExpressError {
  constructor(message = 'Bad Request') {
    super(message, 400); // Pass default message and 400 status code
  }
}

// Export ExpressError and BadRequestError
module.exports = { ExpressError, BadRequestError };
