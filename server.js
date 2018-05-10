var express = require("express")

var app = express();

var data = ['cat', 'dog', 'iguana']

app.get("/", function(req, res){
    res.send("app is workin")
})

app.get("/apple", function(req, res){
    res.send(data)
})

app.listen(3000, function(){
    console.log("App is listening :)")
});

//above is starting the server BASIC