/**
* Created by ashu on 8/4/16.
*/

var mongoose = require('mongoose'),
Schema =  mongoose.Schema ;


var pdfschema  = new Schema({

  email: String,
  url : String,
  date:String,
  time : String
})

var pdfdata = mongoose.model('pdfdata' , pdfschema);

module.exports = pdfdata;
