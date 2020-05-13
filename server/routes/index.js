'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');
const uploader = require('./../multer-configure.js');
const Product = require('./../models/product');
/* Os modelos abaixo não estão a ser utilizados */
const Annoucement = require('./../models/announcement');
const Building = require('./../models/building');
const Post = require('./../models/post');
const Bill = require('./../models/bill');
const Calendar = require('../models/calendar.js');
const Tests = require('./../models/tests');
const User = require('./../models/user');

router.get('/', (req, res, next) => {
	res.json({ type: 'success', data: { title: 'Hello World' } });
});

router.get('/private', routeGuard, (req, res, next) => {
	res.json({});
});

router.post('/annoucement', uploader.single('picture'), (req, res, next) => {
	const { title, description } = req.body;
	let url;
	let buildingId = req.user.buildingId;
	const creatorName = req.user.name;
	if (req.file) {
		url = req.file.url;
	}

	Annoucement.create({
		title,
		description,
		picture: url,
		creator: req.user._id,
		buildingId,
		creatorName,
	})
		.then((annoucement) => {
			res.json({ annoucement });
		})
		.catch((error) => {
			next(error);
		});
});
module.exports = router;

router.get('/annoucement', (req, res, next) => {
	let buildingId = req.user.buildingId;
	Annoucement.find({ buildingId: buildingId })
		.sort({ timestamp: 'ascending' })
		.then((annoucements) => {
			res.json({ annoucements });
			console.log({ annoucements }, '123');
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/building', uploader.single('picture'), (req, res, next) => {
	const numberOfApartments = JSON.parse(req.body.numberOfApartments);
	const { name, address, numberOfFloors, admin, picture } = req.body;
	let url;
	if (req.file) {
		url = req.file.url;
	}
	Building.create({
		name,
		address,
		numberOfFloors,
		admin,
		numberOfApartments,
		picture: url,
	})
		.then((building) => {
			res.json({ building });
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/building', (req, res, next) => {
	console.log('on the server.................', req.user);
	let building = req.user.buildingId;
	return (
		Building.findById(building)
			// this id is the buiding to find it
			.then((building) => {
				console.log('Searching for:', building);
				res.json({ building });
			})
			.catch((error) => {
				next(error);
			})
	);
});

router.get('/firstBuilding/:id', (req, res, next) => {
	const id = req.params.id;
	return (
		Building.findById(id)
			// this id is the buiding to find it
			.then((building) => {
				console.log('Searching for:', building);
				res.json({ building });
			})
			.catch((error) => {
				next(error);
			})
	);
});

router.post('/updateBuilding', (req, res, next) => {
	console.log('in the server right now', req.body);
	const id = req.body.id;
	const numberOfApartments = req.body.list;
	console.log('this is id', numberOfApartments);
	return (
		Building.findByIdAndUpdate(id, { numberOfApartments })
			// this id is the buiding to find it
			.then((building) => {
				console.log('Searching for:', building);
				res.json({ building });
			})
			.catch((error) => {
				console.log(error);
				next(error);
			})
	);
});
/* Os meus serviços */

router.post('/createProduct', (req, res, next) => {
	const {
		Picture,
		Category,
		Brand,
		Quantity,
		Region,
		Description,
		Price,
		Stock,
	} = req.body;
	console.log('Final step', {
		Picture,
		Category,
		Brand,
		Quantity,
		Region,
		Description,
		Price,
		Stock,
	});
	Product.create({
		Picture,
		Category,
		Brand,
		Quantity,
		Region,
		Description,
		Price,
		Stock,
	})
		.then((result) => {
			res.json({ result });
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/getProducts', (req, res, next) => {
	Product.find()
		.then((product) => {
			res.json({ product });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/post', uploader.single('picture'), (req, res, next) => {
	const { title, description } = req.body;
	console.log('body', req.body);
	console.log('user', req.user);
	let url;
	let buildingId = req.user.buildingId;
	const creatorName = req.user.name;
	if (req.file) {
		url = req.file.url;
	}

	Post.create({
		title,
		description,
		picture: url,
		buildingId,
		creatorName,
	})
		.then((post) => {
			res.json({ post });
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/post', (req, res, next) => {
	let buildingId = req.user.buildingId;
	Post.find({ buildingId: buildingId })
		.sort({ timestamp: 'ascending' })
		.then((posts) => {
			res.json({ posts });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/bill', uploader.single('picture'), (req, res, next) => {
	console.log('this is the server', req.body);
	const {
		buildingId,
		id,
		type,
		purpose,
		amount,
		month,
		year,
		description,
		file,
	} = req.body;
	console.log('body', req.body);
	console.log('user', req.user);
	let url;
	const creatorName = req.user.name;
	if (req.file) {
		url = req.file.url;
	}

	Bill.create({
		buildingId,
		id,
		type,
		purpose,
		amount,
		month,
		year,
		description,
		file,
	})
		.then((post) => {
			res.json({ post });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/eraseBill', (req, res, next) => {
	const id = req.body.id;
	console.log('im on the server', id);
	Bill.findByIdAndRemove(id)
		.then(() => {
			res.json();
		})
		.catch((error) => {
			next(error);
		});
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
	const { subject, date, name } = req.body.id;
	console.log('server side', { subject, date, name });
	Tests.create({ subject, date, name })
		.then((result) => {
			res.json({ result });
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/services', (req, res, next) => {
	let buildingId = req.user.buildingId;
	Services.find({ buildingId: buildingId })
		.sort({ timestamp: 'ascending' })
		.then((services) => {
			res.json({ services });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/calendar', (req, res, next) => {
	const { title, start } = req.body;
	let buildingId = req.user.buildingId;
	Calendar.create({
		title,
		start,
		buildingId,
	})
		.then((calendar) => {
			res.json({ calendar });
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/calendar', (req, res, next) => {
	let buildingId = req.user.buildingId;
	Calendar.find({ buildingId: buildingId })
		.then((calendar) => {
			res.json({ calendar });
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

router.post('/updateCart', (req, res, next) => {
	console.log('in the server right now', req.body);
	const { id, cart } = req.body;
	console.log('this update cart (server)', {
		id,
		cart,
	});
	return User.findByIdAndUpdate(id, {
		cart,
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
