const { route } = require('./health');
const health=require('./health');
const getUser=require('./users/getUser');
const postUser=require('./users/postUser');
const router=require('express-async-router').AsyncRouter();

router.get('/',health);
router.get('/user',getUser);
router.post('/user',postUser);

module.exports=router;