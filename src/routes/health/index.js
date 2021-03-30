const express = require('express');
const router = express.Router();
const validate=require('../../middleware/validation')
router.get('/', 
  validate,
  async function(req, res, next) {
    return await res.status(200).send('health');

});

module.exports = router;
