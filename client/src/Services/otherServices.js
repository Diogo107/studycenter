import axios from 'axios';
//const cors = require('cors');

const instance = axios.create({
	baseURL: '/api',
});

const StudentsList = async (date) => {
	try {
		const result = await instance.get('/studentsList', { date });
		const studentsList = result.data.result;
		return studentsList;
	} catch (error) {
		throw error;
	}
};
export { StudentsList };

const newTest = async (id) => {
	try {
		console.log('other services', id);
		const result = await instance.post('/newTest', { id });
		console.log('other services', result);
		const posts = result.data.posts;
		return posts;
	} catch (error) {
		throw error;
	}
};
export { newTest };

const updateStudent = async (data) => {
	try {
		console.log('other services', data);
		const result = await instance.post('/updateStudent', { data });
		const posts = result.data.result;
		return posts;
	} catch (error) {
		throw error;
	}
};
export { updateStudent };

const updatePassword = async (data) => {
	try {
		console.log('other services', data);
		const result = await instance.post('/updatePassword', { data });
		const posts = result.data.result;
		return posts;
	} catch (error) {
		throw error;
	}
};
export { updatePassword };

const updateMaterial = async (data) => {
	try {
		console.log('other services', data);
		const result = await instance.post('/updateMaterial', { data });
		const posts = result.data.result;
		return posts;
	} catch (error) {
		throw error;
	}
};
export { updateMaterial };

const createArticle = async (data) => {
	try {
		console.log('other services', data);
		const result = await instance.post('/createArticle', { data });
		const posts = result.data.result;
		return posts;
	} catch (error) {
		throw error;
	}
};
export { createArticle };

const updateNotes = async (id) => {
	try {
		console.log('other services post', id);
		const result = await instance.post('/updateNotes', { id });
		console.log('other services result', result);
		const posts = result.data.posts;
		return posts;
	} catch (error) {
		throw error;
	}
};
export { updateNotes };

const getTests = async (date) => {
	try {
		const result = await instance.get('/getTests');
		const getTests = result.data.tests;
		return getTests;
	} catch (error) {
		throw error;
	}
};
export { getTests };

const getArticles = async (date) => {
	try {
		const result = await instance.get('/getArticles');
		console.log('other servixes', result);
		const getArticles = result.data.material;
		return getArticles;
	} catch (error) {
		throw error;
	}
};
export { getArticles };

const newAnnouncement = async (data) => {
	try {
		console.log('other services post', data);
		const result = await instance.post('/newAnnouncement', { data });
		console.log('other services result', result);
		const posts = result.data.posts;
		return posts;
	} catch (error) {
		throw error;
	}
};
export { newAnnouncement };

const sendMessage = async (data) => {
	try {
		console.log('other services post', data);
		const result = await instance.post('/sendMessage', { data });
		console.log('other services result', result);
		const posts = result.data.posts;
		return posts;
	} catch (error) {
		throw error;
	}
};
export { sendMessage };

const getMessages = async (date) => {
	try {
		const result = await instance.get('/getMessages');
		console.log('other servixes', result);
		const getMessages = result.data.tests;
		return getMessages;
	} catch (error) {
		throw error;
	}
};
export { getMessages };

const uploadMaterial = async (data) => {
	console.log('other services', data);
	try {
		const result = await instance.post('/uploadMaterial', data);
		return result;
	} catch (error) {
		console.log(error);
	}
};
export { uploadMaterial };

const getMaterial = async () => {
	const result = await instance.get('/getMaterial');
	return result.data.material;
};
export { getMaterial };

const uploadDailyChallenge = async (data) => {
	console.log('other services', data);
	try {
		const result = await instance.post('/uploadDailyChallenge', data);
		return result;
	} catch (error) {
		console.log(error);
	}
};
export { uploadDailyChallenge };

const getDailyChallenge = async () => {
	const result = await instance.get('/getDailyChallenge');
	return result.data.material;
};
export { getDailyChallenge };

const getAnnouncement = async (date) => {
	try {
		const result = await instance.get('/getAnnouncement');
		const getAnnouncement = result.data.tests;
		return getAnnouncement;
	} catch (error) {
		throw error;
	}
};
export { getAnnouncement };
