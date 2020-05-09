
var express = require('express');
var bodyParser = require('body-parser');
//added below for mongo
var mongoose = require("mongoose");
var Info = require("./models/Info");
mongoose.connect("mongodb://localhost/infodb");
//added above for mongo

var routes = require("./routes");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('./'));
app.use('/js', express.static('./public/js'));
app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port);



