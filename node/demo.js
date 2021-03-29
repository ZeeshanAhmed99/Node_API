var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"djangodatabase"
});
conn.connect(function(error){
    if(error)
     throw error;
    else 
    conn.query("select * from firstapp_getdata",function(err,result){
        if(err)
        throw err;
        else
        console.log("Results",result[0].Email)
    });
})
