const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get("/home/:name",function(req,res){
    var name = req.params.name;
    res.render("Home",{name: name});
});
app.listen(1440);