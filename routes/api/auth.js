const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

//@route GET api/auth
//@desc Test route
//@access private

router.get('/', auth, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    console.log(user, 'user');
  } catch (error) {}
});

module.exports = router;
