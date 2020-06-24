const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Profile = require('../../models/Profile');

//@route GET api/profile/me
//@desc Profile route
//@access private
router.get('/me', auth, async (req, res, next) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate({
      path: 'user',
      select: ' name avatar'
    });
    if (!profile) {
      return res.status(400).json({
        msg: 'There is no profile for this user'
      });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
