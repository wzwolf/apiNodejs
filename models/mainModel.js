const mongoose = require('mongoose');

// new schema for string data
const infoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	info: {
		type: String,
		required: true
	},
	infoDate: {
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model("info",infoSchema)
