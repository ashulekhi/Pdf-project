/**
 * Created by ashu on 5/4/16.
 */


var express = require('express');
var mongoose = require('mongoose');
var app = express();
var route = require('./router');
var bodyParser = require('body-parser')
var cron = require('cron');
var pdfservice = require('./api/pdfscheduling')
var pdfcontroller = require('./api/pdf.controller')


mongoose.connect('mongodb://localhost/pdfdata');

app.use(express.static('../client'));
app.use(express.static('../server/files'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',route)
app.use('/convert', require('./urlfile'))
app.use('/generatelater',function(req,res,net){
 net();
}, require('./api'))
app.listen(10000,function(){

  var cronJob = cron.job("* * * * *", function(){
    // perform operation e.g. GET request http.get() etc.
   pdfcontroller.startscheduler()
  });

  cronJob.start();
  console.log('server running ')
})
