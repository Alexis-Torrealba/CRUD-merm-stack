import { createPool } from 'mysql2/promise';

const pool = new createPool({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Alexispass',
	database: 'tasksbd',
});

export { pool };
