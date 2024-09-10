/** Application for bank.ly */

const express = require('express');
const app = express();
const ExpressError = require("./helpers/expressError");

app.use(express.json());

// Import and mount routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

/** 404 handler */
app.use(function(req, res, next) {
  // Create a new ExpressError with a 404 status for routes not found
  const err = new ExpressError("Not Found", 404);
  // Pass the error to the general error handler
  return next(err);
});

/** General error handler */
app.use(function(err, req, res, next) {
  // Set the response status code. Default to 500 if err.status is undefined.
  res.status(err.status || 500);
  
  // Respond with JSON containing the status and message
  return res.json({
    status: err.status || 500, // Ensure status is always included in the response
    message: err.message
  });
});

module.exports = app; // Export the app instance for use in other modules
