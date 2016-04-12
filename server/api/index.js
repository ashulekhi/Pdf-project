/**
* Created by ashu on 8/4/16.
*/


var express = require('express');
var controller = require('./pdf.controller');



var router = express.Router();

router.post('/' ,function(req,res,next){

  console.log('we have recieved data' , req.body);
  next();

}, controller.create)


module.exports = router
