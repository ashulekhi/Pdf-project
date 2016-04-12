/**
* Created by ashu on 8/4/16.
*/

var pdfdata = require('./pdf.model');

exports.create = function(req,res){

  pdfdata.create(req.body, function(err, pdf) {
    console.log('reached till mongoose',err,pdf)
   // console.log('reached till mongoose',req.body)
    if(err) { return handleError(res, err); }
    return res.status(201).json(pdf);
  });


}
