/**
 * Created by ashu on 6/4/16.
 */

var urlService = require('./urlService');


exports.convertFile = function(req,res){

  console.log('inside conver controller' ,req.query.weburl)


  urlService.convertFile(req,res,function(){

    res.send('pdf generated');
  })

}



exports.sendFile = function(req,res){

  urlService.sendFile(req,res);
}


exports.viewFile = function(req,res){

  urlService.viewFile(req,res);
}
