'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		lowercase: true,
		trim: true,
	},
	picture: {
		type: String,
		default:
			'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png',
	},
	phoneNumber: {
		type: Number,
		trim: true,
	},
	passwordHash: {
		type: String,
	},
	admin: {
		type: Boolean,
		default: false,
	},
	behaviour: {
		type: Number,
		default: 5,
	},
	achievement: {
		type: Number,
		default: 5,
	},
	role: {
		type: String,
		require,
		default: 'Aluno',
	},
	active: {
		type: Boolean,
		require,
		default: true,
	},
	notes: [
		{
			id: Number,
			text: String,
			date: Date,
		},
	],
	year: Number,
	createdAt: Date,
});

module.exports = mongoose.model('User', schema);
