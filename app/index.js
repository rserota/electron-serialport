// console.log(window)
// console.log(process.version)
// var remote = require('remote'); 
// var dialog = remote.require('dialog'); 
// function openFile () {
//   dialog.showOpenDialog(function (fileNames) {
//   }); 
// }

// openFile()

var request = require('request')

request('http://c.xkcd.com/random/comic/', function(err, data){
    var part = data.body.match(/imgs.xkcd.com\/comics.*?"/)
    var href = 'http://' + part[0].slice(0,-1)
    document.getElementById('the-pic').src=href
})

var serialPort = require("serialport-electron");
serialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log('comName: ', port.comName);
    console.log('pnpID : ', port.pnpId);
    console.log('manufacturer : ', port.manufacturer);
  });
});
