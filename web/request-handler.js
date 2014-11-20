var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
var fs = require('fs');
// require more modules/folders here!


exports.handleRequest = function (req, res, reqPath) {
  if (reqPath.split('/')[1] === 'sites') {
    reqPath = '../archives' + reqPath;
  }
  else if (reqPath === '/') {
    reqPath = './public/index.html';
  }
  else if (reqPath === '/styles.css') {
    reqPath = './public/styles.css';
  }
  else { reqPath = './public'+reqPath}

//send loading page
  helpers.serveAssets(res, reqPath);
  // helpers.serveAssets(res, './public/loading.html');
//send requested page

};
    //set reqPath == local sites cache
  //else
    //set reqPath to loading.html
    //fire html fetcher thing
  // console.log(req.url);
   //check sites.txt using fs.readFile


//var headers = helpers.headers;
//headers['content-type'] = require('url').
