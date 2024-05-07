import axios from 'axios';

export const getTasksRequest = async () => {
	try {
		const response = await axios.get('http://localhost:4700/tasks');
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

//Concetar ruta de backend
export const createTaskRequest = async (task) => {
	try {
		const response = await axios.post('http://localhost:4700/tasks', task);
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const deleteTaskRequest = async (id) => {
	try {
		const response = await axios.delete(`http://localhost:4700/tasks/${id}`);
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getTaskRequest = async (id) => {
	try {
		const response = await axios.get(`http://localhost:4700/tasks/${id}`);
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const updateTaskRequest = async (id, newFields) => {
	try {
		const response = await axios.put(
			`http://localhost:4700/tasks/${id}`,
			newFields
		);
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const toggleTaskRequest = async (id, done) => {
	try {
		const response = await axios.put(`http://localhost:4700/tasks/${id}`, {
			done,
		});
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
