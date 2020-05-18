'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	content: [
		{
			userId: String,
			userName: String,
			message: String,
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	users: Array,
});

module.exports = mongoose.model('Chat', schema);

//Optional Address Under
/* 
country: {
  type: String,
  trim: true
},
city: {
  type: String,
  trim: true
},
street: {
  type: String,
  trim: true
},
doorNumber:{
  type: String,
  trim: true
},
floor:{
  type: Number,
  trim: true
},
letter:{
  type: String,
  trim: true
}
 */
