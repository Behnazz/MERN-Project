const express = require('express');

const router = express.Router();

//@route GET api/auth
//@desc Test route
//@access private

router.get('/', (req, res, next) => {
  res.send('Auth route');
});

module.exports = router;
