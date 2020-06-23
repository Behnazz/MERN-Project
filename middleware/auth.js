const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

//load env variables
dotenv.config({ path: './config/config.env' });

module.exports = function (req, res, next) {
  //get token from the header
  const token = req.header('x-auth-token');

  // check if not a token
  if (!token) {
    return res.status(401).json({
      msg: 'No token, authorization denied'
    });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
