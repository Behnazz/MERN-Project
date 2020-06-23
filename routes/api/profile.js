const express = require('express');

const router = express.Router();

//@route GET api/profile
//@desc Test route
//@access private

router.get('/', (req, res, next) => {
  res.send('profile route');
});

module.exports = router;
