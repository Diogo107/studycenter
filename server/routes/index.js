'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');
const Tests = require('./../models/tests');
const User = require('./../models/user');
const Material = require('./../models/material');
const Announcements = require('../models/announcements');
const multer = require('multer');
const upload = multer({ dest: 'uploadedFiles/' });
const uploader = require('./../multer-configure.js');

router.get('/', (req, res, next) => {
	res.json({ type: 'success', data: { title: 'Hello World' } });
});

router.get('/studentsList', (req, res, next) => {
	User.find({ admin: false })
		.sort({ timestamp: 'descending' })
		.then((result) => {
			console.log(result);
			res.json({ result });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/newTest', (req, res, next) => {
	const { subject, date, name, userId } = req.body.id;
	console.log('server side', { subject, date, name, userId });
	Tests.create({ subject, date, name, userId })
		.then((result) => {
			res.json({ result });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/updateNotes', (req, res, next) => {
	const { notes, userId } = req.body.id;
	console.log('server side', notes);
	console.log('server side', userId);
	User.findByIdAndUpdate(userId, { notes })
		.then((result) => {
			res.json({ result });
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/getTests', (req, res, next) => {
	Tests.find()
		.sort({ date: 'ascending' })
		.then((tests) => {
			res.json({ tests });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/newAnnouncement', (req, res, next) => {
	const { title, text } = req.body.data;
	console.log('server side', { title, text });
	Announcements.create({ title, text })
		.then((result) => {
			res.json({ result });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/uploadMaterial', async (req, res, next) => {
	const { Subject, Theme, Year, Sumary, Questions } = req.body;
	try {
		const result = await Material.create({
			Subject,
			Theme,
			Year,
			Sumary,
			Questions,
		});
		res.json({ result });
	} catch (error) {
		console.log(error);
	}
});

router.get('/getMaterial', (req, res, next) => {
	Material.find()
		.sort({ Subject: 'ascending' })
		.then((material) => {
			res.json({ material });
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/getAnnouncement', (req, res, next) => {
	Announcements.find()
		.sort({ date: 'descending' })
		.limit(10)
		.then((tests) => {
			res.json({ tests });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/sendEmail', (req, res, next) => {
	const mail = req.body.name;
	const buildingId = req.body.buildingId;
	const slotId = req.body.slotId;
	console.log('This is my friend', mail, buildingId, slotId);

	const nodemailer = require('nodemailer');
	const EMAIL = process.env.BRAND_EMAIL;
	const PASSWORD = process.env.BRAND_EMAIL_PASSWORD;

	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: EMAIL,
			pass: PASSWORD,
		},
	});

	return transporter.sendMail({
		from: `Welcome to Home Sweet Home <${EMAIL}>`,
		to: mail,
		subject: 'Hello from the Home Sweet Home',
		html: `<br /><br /><br />You were invited to your new home! Follow the link to know your new home: ${process.env.WORKING_URL2}sign-up/user/${slotId}/${buildingId}`,
	});
});

router.post('/updateProfile', (req, res, next) => {
	console.log('in the server right now', req.body);
	const {
		id,
		name,
		email,
		admin,
		phoneNumber,
		NIF,
		Council,
		Parish,
		Address,
		BuildingNumber,
		Floor,
		DoorNumber,
		ZipCode,
	} = req.body;
	console.log('this is id', {
		id,
		name,
		email,
		admin,
		phoneNumber,
		NIF,
		Council,
		Parish,
		Address,
		BuildingNumber,
		Floor,
		DoorNumber,
		ZipCode,
	});
	return User.findByIdAndUpdate(id, {
		name,
		admin,
		email,
		phoneNumber,
		NIF,
		Council,
		Parish,
		Address,
		BuildingNumber,
		Floor,
		DoorNumber,
		ZipCode,
	})
		.then((building) => {
			console.log('Searching for:', building);
			res.json({ building });
		})
		.catch((error) => {
			console.log(error);
			next(error);
		});
});

module.exports = router;
