'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
	},
	content: {
		type: String,
		trim: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('DailyChallenge', schema);
