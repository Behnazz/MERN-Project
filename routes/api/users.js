const express = require('express');

const router = express.Router();

//@route GET api/users
//@desc Test route
//@access public
router.get('/', (req, res, next) => {
  res.send('user Route');
});

module.exports = router;
