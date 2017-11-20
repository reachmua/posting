// var bodyParser = require('body-parser');
// var cors = require('cors');
var connect = require('connect');
var express = require("express");
var http = require("https");
var app = express();
var bodyitems = {
    // items
    "name": "Plaid",
    "email": "plaid@plaid.com",
    "web": "plaid.com",
  // "github": "github.com/reachmua" // optional
};

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

app.use(express.static(__dirname + "/client"));

// var endpoint = 'https://contact.plaid.com/jobs';

// Parse JSON objects.
app.use(express.urlencoded());

app.post("https://contact.plaid.com/jobs", function (req, res) {
    
    // Objects storedin Body.
    var add_bodyitems = req.body;
    
    console.log(add_bodyitems);
    
    bodyitems.push(add_bodyitems);
    
    // Send an object back.
    var response = "";
    res.json(response);

});

app.listen(process.env.PORT || 3000, function () {
  console.log('App is running on Port 3000.');
});