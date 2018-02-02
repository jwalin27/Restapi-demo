var express = require('express');
var app = express(); //calling the express function 
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test_ap');

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

/*
app.get('/', function(req, res){
	res.send('working');
});*/

//Staring the server
app.listen(3000);
console.log('API is running on Port 3000')
