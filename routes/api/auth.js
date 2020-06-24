const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const { check, validationResult } = require('express-validator');

//load env variables
dotenv.config({ path: './config/config.env' });

//@route GET api/auth
//@desc get route
//@access private

router.get('/', auth, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

//route POST api/auth
//@desc authenticate user & get token
//@access private
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const { email, password } = req.body;
    try {
      //check if the user is registered
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          msg: 'Invalid credentials'
        });
      }

      // check if password matches
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      //jwt token
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRE
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
