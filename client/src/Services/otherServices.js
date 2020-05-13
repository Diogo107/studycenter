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
