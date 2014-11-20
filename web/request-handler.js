var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
var fs = require('fs');
// require more modules/folders here!

var typeConversions = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript'
};

exports.handleRequest = function (req, res, reqPath) {
  if (reqPath === '/') {
    reqPath = './public/index.html';
  }
  else if (reqPath === '/styles.css') {
    reqPath = './public/styles.css';
  } else {
    //check sites.txt using fs.readFile
    console.log('reading sites');
    fs.readFile('../archives/sites.txt', {encoding:'utf8'}, function(err, data){
      if(err){
        console.log('error reading file:', JSON.stringify(err))
      } else {
        reqPath == './public/loading.html';
        console.log("data",data);
      }
    })
    //if site exists in sites.txt


  }
    //set reqPath == local sites cache
  //else
    //set reqPath to loading.html
    //fire html fetcher thing
  // console.log(req.url);
  fs.readFile(reqPath,{encoding:"utf8"}, function(err, data){
    if(err){
      res.writeHead(404, helpers.headers );
      res.end(JSON.stringify(err));
    } else {
      helpers.headers['Content-Type'] = typeConversions[path.extname(reqPath)];
      res.writeHead(200, helpers.headers)
      res.write(data);
      res.end();
    }
  });
  // res.end(archive.paths.list);
};


//var headers = helpers.headers;
//headers['content-type'] = require('url').
