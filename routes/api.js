
//Dependencies

var express = require('express');
var router = express.Router();

// Models

var restaurant = require('../models/restaurant');


/*
router.get('/users', function(req,res){
	res.send ('api working');
});*/

restaurant.methods(['get','put','post','delete']);
restaurant.register(router, '/restaurants');

// Return routers as modules
module.exports = router;
