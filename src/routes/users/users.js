var express = require('express');
var router = express.Router();
const appCore=require('../../server')
/* GET users listing. */

module.exports=()=>{
  const {app}=appCore.getInstance();
  app.get('user',
    async function(req, res, next) {
      res.status(200).send('getUser');
    }
  )
}

// router.get('/user', async function(req, res, next) {
//   res.status(200).send('getUser');
// });

// module.exports = router;
