const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.listen(port, function(){
    console.log("Server started on port " + port);
});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/info", function(req,res){
    console.log('/info GET requested');
    var info = JSON.parse(fs.readFileSync('./prices.json', 'utf-8'));
    res.json(info);
});

app.post("/submit", (req, res) => {
    console.log('/submit POST requested');
    console.log(req.body.name);
    console.log(req.body.division);
    console.log(req.body.phone);
    console.log(req.body.parent);
    console.log(req.body.package);
    console.log(req.body.bonus);
    res.send("Order placed");
});
