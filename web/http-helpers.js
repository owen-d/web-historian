var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var typeConversions = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript'
};


exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset) {
  console.log('serving assets:', asset);
  fs.readFile(asset, {encoding: 'utf8'}, function(err, data){
    if(err){
      //write site to sitesToBeArchived.txt
      fs.appendFile('../archives/sitesToBeArchived.txt', asset.replace('../archives/sites/','')+',', function(err){
        console.log('failed to write to file');
      });
      res.writeHead(404, headers );
      res.end(JSON.stringify(err));
    } else {
      console.log('success');
      headers['Content-Type'] = typeConversions[path.extname(asset)];
      res.writeHead(200, headers);
      res.write(data);
      res.end();
    }
  });



  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
};





// As you progress, keep thinking about what helper functions you can put here!
