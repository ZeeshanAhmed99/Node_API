// var express = require('express');
// var app = express();

// app.listen(1337,function(){
//     console.log("Listening at port 1337");
// });

const http = require('http');

let app = http.createServer((req,res)=>{
    //res.writeHead(200,{'Content-Type':'text/plain'});
    
    //res.end('Hello World');
    var text = "<h1> HELLO </h1> <br> <input type = 'text' /> "
res.writeHead(200,{'content-type':"text/html"})
res.write(text);
res.end();
});

app.listen(1337,'127.0.0.1');

console.log("Listening at  port 1337");

var other = require('./other')
console.log(other());

