const router=require('express-async-router').AsyncRouter();

const health=require('./health');
const getUser=require('./users/getUser');
const postUser=require('./users/postUser');
const Route=require('../config/routes')

router.get(Route.HEALTH,health);

router.get(Route.GET_USER,getUser);
router.post(Route.POST_USER,postUser);

module.exports=router;