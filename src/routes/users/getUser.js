const express = require('express');
const router = express.Router();
const validate=require('../../middleware/validation')

//OOD

router.get('/user', 
  validate,
  async function(req, res, next) {
    return await res.status(200).send('get User');

});

module.exports = router;
