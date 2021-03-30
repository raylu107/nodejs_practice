const authorization=async (req,res,next)=>{
    const name=req.body.name;
    // const name=req.query.name;
    for(let i in users){
        if(i==name){
            return next();
        }
    }
    return await res.status(400).send("no user");
}

module.exports=authorization;