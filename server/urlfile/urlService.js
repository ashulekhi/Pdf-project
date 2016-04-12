/**
 * Created by ashu on 6/4/16.
 */

var phantom = require('phantom');
var fs = require('fs');
var path = require('path');

var weburl = '';
var filename = '';
var num

exports.convertFile = function(req,res){

  console.log('inside convert service');

  console.log('url we got is ' , req.query.weburl);

  weburl = req.query.weburl;
  filename = weburl.substr(8,3);
  filename = filename +  Math.floor((Math.random() * 1000000) + 1)  + '.pdf';
  console.log('this is the filename' , filename);

  phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {


      page.open(weburl).then(function(status) {
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
          console.log('Page Rendered');
          ph.exit();
          //res.download('../server/file.pdf')
          res.send(filename)
        });
      });
    });
  });


}

exports.sendFile = function(req,res){

  res.download(filename);
}

exports.viewFile = function(req,res){

  var tempFile="../"+filename;
  res.sendFile(path.join(__dirname, '../',filename));
}


