let path = require("path");
let express = require("express");
//added below for mongo
var mongoose = require("mongoose");
//var Info = require("./models/Info");
//added above for mongo

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();

//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(req,res){
	res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});

//added below for mongo
const myDatabase = require('./myDatabase');
//const myDatabase = require('./myDatabase');
//added above for mongo

let db = new myDatabase();
const Student = require('./Student');


router.get('/read', function(req, res){
	return(db.getStudent(req.query.identifier,res));
});

router.post('/create', function(req, res){
	if (req.body.name == "") {
		res.json(null);
		return;
	}
	let obj = new Student(req.body.identifier,req.body.name,req.body.grade,req.body.volleyball,
		req.body.basketball);
	return(db.postStudent(obj,res));		
});

router.put('/update', function(req, res){
	if (req.body.name == "") {
		res.json(null);
		return;
	}	
	let obj = new Student(req.body.identifier,req.body.name,req.body.grade,req.body.volleyball,req.body.basketball);
	return(db.putStudent(obj,res));
});


router.delete('/delete/:identifier', function(req, res){
	return( db.deleteStudent(req.params.identifier,res));
});



module.exports = router;

