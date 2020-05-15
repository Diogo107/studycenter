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

const uploadFile = async (data) => {
	try {
		console.log('other services', data);
	} catch (error) {
		console.log(error);
	}
};
export { uploadFile };

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
