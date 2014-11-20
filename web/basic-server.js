var http = require("http");
var handler = require("./request-handler");
var url = require('url');
var path = require('path');

var port = 8080;
var ip = "127.0.0.1";
var router = {
  //routes pages
  '/sites': handler.handleRequest
};
var whiteList = {
  '/styles.css': handler.handleRequest,
  '/': handler.handleRequest
}

var server = http.createServer( function(req, res){
  var reqPath = url.parse(req.url).pathname;
  // if(req.method === 'POST'){
  //   console.log('post');
  // }
  console.log(req.url);
  if(router[reqPath]){
    router[reqPath](req, res, reqPath);
  }
  else if (whiteList[reqPath]){
    whiteList[reqPath](req, res, reqPath);
  } else {
    res.writeHead(404, 'invalid request');
    res.end("404");
  }
});

console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

