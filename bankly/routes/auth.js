/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');

/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 */
router.post('/register', async function(req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } = req.body;

    // Register the user and wait for the result
    let user = await User.register({username, password, first_name, last_name, email, phone});
    
    // Generate a token for the registered user
    const token = createTokenForUser(username, user.admin);
    
    // Send the token in the response
    return res.status(201).json({ token });
  } catch (err) {
    return next(err); // Pass the error to the error-handling middleware
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */
router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    
    // Authenticate the user and wait for the result
    let user = await User.authenticate(username, password);
    
    // Generate a token for the authenticated user
    const token = createTokenForUser(username, user.admin);
    
    // Send the token in the response
    return res.json({ token });
  } catch (err) {
    // Provide specific error handling for authentication failure
    if (err.status === 401) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    return next(err); // Pass other errors to the error-handling middleware
  }
}); // end

module.exports = router;
