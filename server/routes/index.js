'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');
const Tests = require('./../models/tests');
const User = require('./../models/user');
const Material = require('./../models/material');
const Announcements = require('../models/announcements');
const Article = require('../models/article');
const DailyChallenge = require('../models/dailyChallenge');
const Chat = require('../models/chat');
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

router.post('/sendMessage', async (req, res, next) => {
	let { content, myId, otherId, name } = req.body.data;
	let data = {
		content: {
			message: content,
			name,
		},
		users: [myId, otherId],
	};
	console.log('req.body', data);
	try {
		const list = await Chat.find();
		let exists = await list.filter((single) => {
			return single.users.includes(myId) && single.users.includes(otherId);
		});
		if (exists.length == 1) {
			content = [data.content, ...exists[0].content];
			let conversationId = exists[0]._id;
			let result = await Chat.findByIdAndUpdate(conversationId, {
				$push: { content: data.content },
			});
			console.log('result', result);
		} else {
			Chat.create(data);
		}

		res.json({});
	} catch (error) {
		console.log(error);
	}
});

router.get('/getMessages', (req, res, next) => {
	Chat.find()
		.then((tests) => {
			console.log('testes', tests)
			res.json({ tests });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/updateStudent', async (req, res, next) => {
	console.log('req.body', req.body);
	const {
		id,
		active,
		name,
		email,
		year,
		behaviour,
		achievement,
	} = req.body.data;
	console.log({
		id,
		active,
		name,
		email,
		year,
		behaviour,
		achievement,
	});
	try {
		const result = await User.findByIdAndUpdate(id, {
			name,
			active,
			email,
			year,
			behaviour,
			achievement,
		});
		res.json({ result });
	} catch (error) {
		console.log(error);
	}
});

router.post('/updateMaterial', async (req, res, next) => {
	const { id, Subject, Theme, Year, Sumary, Questions } = req.body.data;
	console.log({ id, Subject, Theme, Year, Sumary, Questions });
	try {
		const result = await Material.findByIdAndUpdate(id, {
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

router.post('/createArticle', async (req, res, next) => {
	const { title, content } = req.body.data;
	console.log({ title, content });
	try {
		const result = await Article.create({ title, content });
		res.json({ result });
	} catch (error) {
		console.log(error);
	}
});

router.get('/getArticles', (req, res, next) => {
	Article.find()
		.sort({ date: 'descending' })
		.then((material) => {
			console.log(material);
			res.json({ material });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/uploadDailyChallenge', async (req, res, next) => {
	const { title, content } = req.body;
	console.log('req.body', { title, content });
	try {
		const result = await DailyChallenge.create({ title, content });
		res.json({ result });
	} catch (error) {
		console.log(error);
	}
});

router.get('/getDailyChallenge', (req, res, next) => {
	DailyChallenge.find()
		.sort({ date: 'descending' })
		.limit(1)
		.then((material) => {
			console.log(material);
			res.json({ material });
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/getMaterial', (req, res, next) => {
	Material.find()
		.sort({ Subject: 'ascending' })
		.then((material) => {
			console.log(material);
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
		status,
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
		status,
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
