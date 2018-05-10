var express = require("express")

var app = express();

var port = process.env.PORT||3000;

var data = ['cat', 'dog', 'iguana']

app.get("/", function(req, res){
    res.send("app is workin")
})

app.get("/apple", function(req, res){
    res.send(data)
})

app.listen(port, function(){
    console.log("App is listening :)")
});

//above is starting the server BASIC