'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		text: {
			type: String,
			trim: true,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamp: { type: Date, default: Date.now },
	}
);

module.exports = mongoose.model('announcements', schema);
