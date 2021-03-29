var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"djangodatabase"
});
 const express = require('express');
 const new_express = express();
 conn.connect(function(error){
    if(error)
     throw error;})

const checkUrl = function(req,res,next){
console.warn("current route is for api",req.originalUrl);
next();
}
new_express.use(checkUrl);
new_express.get("/home",function(req,res){
    res.sendFile(__dirname+"/Home.html");
})
new_express.get("/",function(req,res){
    conn.query("select * from firstapp_getdata",function(err,result){
        if(err)
        throw err;
        else
        res.send(result);
    });
  });

new_express.get("/:id",function(req,res){   
    var id = req.params.id;
        conn.query("select * from firstapp_getdata where id = ?" ,id,function(err,result){
            if(err)
            throw err;
            else
            res.send(result);
        });
      });
      new_express.listen(1337);