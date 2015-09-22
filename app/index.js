console.log(window)
// var remote = require('remote'); 
// var dialog = remote.require('dialog'); 
// function openFile () {
//   dialog.showOpenDialog(function (fileNames) {
//   }); 
// }

// openFile()

var request = require('request')

request('http://c.xkcd.com/random/comic/', function(err, data){
    console.log(data.body.match(/img src=".*?"/))
    var part = data.body.match(/imgs.xkcd.com\/comics.*?"/)
    console.log(part)
    var href = 'http://' + part[0].slice(0,-1)
    console.log(href)
    document.getElementById('the-pic').src=href
})