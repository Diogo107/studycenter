'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
	},
	subject: {
		type: String,
		require,
	},
	userId: String,
	date: Date,
});

module.exports = mongoose.model('Tests', schema);
