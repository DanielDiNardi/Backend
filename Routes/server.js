"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 3000;
var things = require("./routes/things");

app.use(express.json());
//add middleware before this point
app.use("/things", things);
//use the things.js file to handle
//endpoints that start with /things

app
    .route("/")
    .get((req, res) => {
    console.log("here root");
    res.send("I am root");
});

app.listen(port, err => {
    if(err){
        return console.log("ERROR: " + err);
    }
    console.log(`Listening on port ${port}`);
});