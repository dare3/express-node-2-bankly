/** Middleware for handling req authorization for routes. */

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Authorization Middleware: Requires user is logged in. */

function requireLogin(req, res, next) {
  try {
    if (req.curr_username) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' }); // Bug Fixed: Proper error handling for unauthorized access
    }
  } catch (err) {
    return next(err); // Pass any error to the next middleware
  }
}

/** Authorization Middleware: Requires user is logged in and is staff. */

function requireAdmin(req, res, next) {
  try {
    if (req.curr_admin) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' }); // Bug Fixed: Proper error handling for unauthorized access
    }
  } catch (err) {
    return next(err); // Pass any error to the next middleware
  }
}

/** Authentication Middleware: put user on request
 *
 * If there is a token, verify it, get payload (username/admin),
 * and store the username/admin on the request, so other middleware/routes
 * can use it.
 *
 * It's fine if there's no token---if not, don't set anything on the
 * request.
 *
 * If the token is invalid, an error will be raised.
 *
 **/

function authUser(req, res, next) {
  try {
    // Bug Fixed: Get token from Authorization header or custom header
    const token = req.headers.authorization || req.headers['x-auth-token'];
    
    if (token) {
      // Bug Fixed: Remove "Bearer " prefix if present
      const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;
      
      // Bug Fixed: Use jwt.verify instead of jwt.decode to validate token and get payload
      const payload = jwt.verify(actualToken, SECRET_KEY);
      
      // Bug Fixed: Check if payload exists before setting user info on request
      if (payload) {
        req.curr_username = payload.username;
        req.curr_admin = payload.admin;
      }
    }
    return next(); // Continue to next middleware
  } catch (err) {
    err.status = 401; // Bug Fixed: Set status code for unauthorized access
    return next(err); // Pass error to the next middleware
  }
} // end

module.exports = {
  requireLogin,
  requireAdmin,
  authUser
};
