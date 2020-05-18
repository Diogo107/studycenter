'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	title: {
		type: String,
		require,
	},
	content: {
		type: String,
		require,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Article', schema);
