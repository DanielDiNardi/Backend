const { request } = require("express");
const express = require("express");
var app = express();
const port = process.env.port || 3000;

// Sets template engine
app.set("view engine", "ejs");

app
    .route("/")
    .get(function (req, res){
        res.sendFile(__dirname + "/public/html/index.html");
    });

app
    .route("/contact")
    .get(function (req, res){
        res.sendFile(__dirname + "/public/html/contact.html");
    });

app
    .route("/profile/:name")
    .get(function (req, res){
        var data = {age: 20, job: "Web Developer"};
        res.render("profile", {person: req.params.name, data: data});
    });

app.listen(port, err => {
    if(err){
        return console.log("ERROR: " + err);
    }
    console.log(`Listening on port ${port}`);
});