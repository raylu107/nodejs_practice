const appCore=require('../../server')

function getUser(){
  const {app}=appCore.getInstance();
  app.get('/user',
    async function(req, res, next) {
      res.status(200).send('getUser');
    }
  )
}

module.exports = getUser;
