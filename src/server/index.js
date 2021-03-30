var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const router=require('../routes')
const _=require('lodash');

class appFactory{

  constructor(){
      this.app=express();
      this.app.use(logger('dev'));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(path.join(__dirname, 'public')));

      this.app.use('/', router);

      // catch 404 and forward to error handler
      this.app.use(function(req, res, next) {
        next(createError(404));
      });

      // error handler
      this.app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
      });
  }
}

let _instance = null;

const appInterface={
  getInstance:()=>{
    if (_.isNull(_instance)) {
      const app=(_instance = new appFactory());
    }
    return _instance;
  }
}

module.exports=appInterface;