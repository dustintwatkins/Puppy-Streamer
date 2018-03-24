
var express = require('express');
var fs = require('fs');
var https = require('https');
var path = require('path');
var app = express();
//
var options = {
  key:fs.readFileSync('public/my-key.pem'),
  cert:fs.readFileSync('public/my-cert.pem')
};


app.get('/', function(req, res){
  console.log("REQEUST: " + req)
  res.sendFile('index.html', {root: 'public'});
});

/*
router.get('/', function(req, res, next){
  res.sendFile('index.html', {root: 'public'});
});
*/
//var port = 443
var port = 2828;
https.createServer(options, app).listen(port, function(){
  console.log('HTTPS listening  on ' + port);
});
