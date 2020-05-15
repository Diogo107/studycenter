'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		Subject: {
			type: String,
			required: true,
			trim: true,
		},
		Theme: {
			type: String,
			required: true,
			trim: true,
		},
		Year: {
			type: Number,
			trim: true,
		},
		Sumary: {
			type: String,
			trim: true,
		},
		Questions: {
			type: String,
			trim: true,
		},
	},
	{
		timestamp: { type: Date, default: Date.now },
	}
);

module.exports = mongoose.model('Material', schema);
