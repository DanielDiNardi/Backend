"use strict";
const express = require("express");
let router = express.Router();

router.use(function(req, res, next){
    console.log(req.url, "@", Date.now());
    next();
});
//add middleware before this point
router
    .route("/cars")
    .get((req, res) => {
        console.log("here");
        res.send("hi get /things/cars");
    })
    .post((req, res) => {
        res.send("hi post /things/cars");
    });

module.exports = router;