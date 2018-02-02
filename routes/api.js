
//Dependencies

var express = require('express');
var router = express.Router();

// Models
var User = require('../models/users');


/*
router.get('/users', function(req,res){
	res.send ('api working');
});*/
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

// Return routers as modules
module.exports = router;
