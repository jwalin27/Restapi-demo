var restful = require('node-restful');
var mongoose = restful.mongoose;

var restaurantSchema = new mongoose.Schema({
	Restaurant: String,
	MenuItem: String,
	Menu: Number
	//Phnnumber: Number

});

module.exports = restful.model('Restaurant', restaurantSchema);