var express = require("express")

var app = express();

var port = process.env.PORT||3000;


var apiroutes = require("./app/routing/apiroutes");

var htmlroutes = require("./app/routing/htmlroutes")

app.use("/", apiroutes);

app.use("/", htmlroutes);



app.listen(port, function(){
    console.log("App is not listening! :)")
});

//above is starting the server BASIC !