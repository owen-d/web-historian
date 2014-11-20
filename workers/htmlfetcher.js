// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.

//parses file sitesToBeArchived.txt
var http = require('http-request');
var fs = require('fs');
var dataArray = [];
//read sitestobearchived
//loop through, running getter on each url
fs.readFile('../archives/sitesToBeArchived.txt', {encoding: 'utf8'}, function(error, data){
  if (error) {
    console.log(error);
    return;
  } else {
    dataArray = data.replace(/\n/g, '').split(',');
    console.log(dataArray);
    dataArray.forEach(function(item){
      getter(item);
    });

  }
});

var getter = function(url){
  console.log(url);
  http.get({
    url: url,
  }, '../archives/sites/'+url, function (err, res) {
    if (err) {
      console.error('err');
      return;
    } else {
      fs.appendFile('../archives/sites.txt', url, function(err){
        // console.log('you done fucked up now');
      });
    }

    // console.log(res.code, res.headers, res.file);
  });
};
// console.log(dataArray);




//function that writes cache files to sites folder
  //attempts to download site
    //on success, write sites.txt

  //on failure, move to next site on list
