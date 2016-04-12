/**
* Created by ashu on 8/4/16.
*/

var pdfdata = require('./pdf.model');

var pdfservice = require('./pdf.service');
var pdfschedulingservice = require('./pdfscheduling');

var scheduleddate = '';
var scheduledtime = '';
var currenttime
var currentdate





exports.create = function(req,res){

  var date = new Date(req.body.time);
   scheduleddate = date.toLocaleDateString();
   scheduledtime = date.getHours() + ':' + date.getMinutes();

  console.log('  ' ,scheduledtime);
  console.log('converting  ' ,scheduledtime);
  console.log('converting  ' ,currenttime);
  console.log('converting  ' ,currentdate);


  req.body.date = scheduleddate;
  req.body.time = scheduledtime;

  pdfservice.create(req,res);
  console.log('converting date and time ' ,req.body);


}

/*var date = new Date();
console.log('current date is ' ,date.toString());*/
//

/*var currentdate  = date.getFullYear();
console.log(currentdate);*/
//var hours = date.getHours();
//var mins  = date.getMinutes();
//
//console.log('hours are ' , hours);
//console.log('minutes are ' , mins);

exports.startscheduler = function(){

  currenttime  =  new Date()
  currenttime = currenttime.getHours() + ':' + currenttime.getMinutes();
  currentdate = new Date().toLocaleDateString();
  pdfschedulingservice.getSchedules(currentdate,currenttime);


}

