const users=require('../content/user.json')
const {setRespondMsg}=require('../lib/errors')
const validate=async (req,res,next)=>{
    try{
        if(!req.body.name){
            return await setRespondMsg(res,401,"Miss parameter: name");
        }
        const name=req.body.name;
        for(let i in users){
            if(i==name){
                return next();
            }
        }
        return await setRespondMsg(res,404,"no user");
    }catch(e){
        return await setRespondMsg(res,500,e);
    }
    
}

module.exports=validate;