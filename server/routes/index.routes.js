import { Router } from 'express';
import { pool } from '../db.js';

const indexRoutes = Router();

indexRoutes.get('/ping', async (req, res) => {
	const [rows] = await pool.query('SELECT 1 + 1 as result');
	console.log(rows[0]);
	res.json(rows);
});

export { indexRoutes };
