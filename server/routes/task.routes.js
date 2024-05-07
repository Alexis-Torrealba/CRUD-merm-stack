import { Router } from 'express';
import {
	getTask,
	createTasks,
	deleteTasks,
	getTasks,
	updateTasks,
} from '../controllers/tasks.controllers.js';

const taskRoutes = Router();

taskRoutes.get('/tasks', getTasks);

taskRoutes.get('/tasks/:id', getTask);

taskRoutes.post('/tasks', createTasks);

taskRoutes.put('/tasks/:id', updateTasks);

taskRoutes.delete('/tasks/:id', deleteTasks);

export { taskRoutes };
