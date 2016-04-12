/**
 * Created by ashu on 6/4/16.
 */


var express = require('express');
var urlController = require('./urlController')
var router = express.Router();

router.get('/',function(req,res,next){


 // console.log('we got the hit',req);
  next();

} , urlController.convertFile);


router.get('/download',function(req,res,next){
 next();
},urlController.sendFile)


router.get('/view',function(req,res,next){
  next();
},urlController.viewFile)

module.exports = router;
