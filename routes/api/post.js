const express = require('express');

const router = express.Router();

//@route GET api/post
//@desc Test route
//@access private

router.get('/', (req, res, next) => {
  res.send('post route');
});

module.exports = router;
