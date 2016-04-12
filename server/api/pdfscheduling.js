/**
 * Created by ashu on 11/4/16.
 */

var pdfdata = require('./pdf.model');

var urlService = require('../urlfile/urlService');
var phantom = require('phantom');

var scheduledConversions ;
var filename;


exports.getSchedules= function(currentdate,currenttime){

  pdfdata.find({$and: [{date:currentdate},{time:currenttime}]} , function(err,schedules){
    scheduledConversions = schedules;
   // if(err) { return handleError(res, err); }
   // return res.status(201).json(schedules)
   // console.log('records are ' ,schedules.length)
    console.log('date and time current are' ,currentdate,currenttime)

    if(scheduledConversions.length!=0){
      console.log('records found')
      scheduledConversions.forEach(function(conversion){

        convert(conversion);
      })

    }


  })

}


var convert = function(conversion){


  filename = conversion.url.substr(8,3);
  filename = filename +  Math.floor((Math.random() * 1000000) + 1)  + '.pdf';
  console.log('this is the filename' , filename);

  phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {

      console.log('conversion started');
      page.open(conversion.url).then(function(status) {
        page.viewportSize = {height:1200 , width:1200};

        page.paperSize = {
          format :'A4',
          orientation:'portrait',
          border:'0.5in'
        }
        page.render(filename).then(function() {
          /* fs.rename(filename , './files/' + filename , function(){
           console.log('file moved')
           })*/
          console.log('Page Converted');
          ph.exit();
          //res.download('../server/file.pdf')
          //res.send(filename)
        });
      });
    });
  });
}


//convert();


