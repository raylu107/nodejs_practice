const { route } = require('./health');
const health=require('./health');
const getUser=require('./users/users');
const router=require('express').Router();

router.get('/',health);
// router.get('/user',getUser);

module.exports=router;