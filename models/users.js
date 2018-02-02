

var restful = require('node-restful');
var mongoose = restful.mongoose;

var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	year: Number
	//Phnnumber: Number

});

module.exports = restful.model('User', userSchema);
