const pool = require('../db');

async function getAllTasksDB() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM tasks';

  const data = (await client.query(sql)).rows;

  return data;
}

async function getTaskByIdDB(id) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM tasks WHERE id =$1';

    const data = (await client.query(sql, [id])).rows;

    return data;
}

module.exports = { getAllTasksDB, getTaskByIdDB };
