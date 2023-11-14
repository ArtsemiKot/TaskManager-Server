const pool = require('../db');

async function getAllTasksDB() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM tasks';

  const data = (await client.query(sql)).rows;

  return data;
}

module.exports = { getAllTasksDB };
