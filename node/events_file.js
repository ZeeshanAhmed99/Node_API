var fs = require('fs');
var rs = fs.createReadStream('./demo.txt');
rs.on('open',function(){
    console.log("demo file is open");
});

var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner1);
eventEmitter.emit("connection");