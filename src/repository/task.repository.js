const pool = require('../db');

async function getAllDataDB() {
  const client = await pool.connect();
  const sql = `select * from tasks`;
  const result = (await client.query(sql)).rows;
  return result;
}

async function getDataTaskByIdDB(id) {
  const client = await pool.connect();
  const sql = `select * from tasks where id=$1`;
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function createDataDB(task, user_id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN')
    const sql = `insert into tasks (task , user_id)
    values ($1,$2) returning *`;
    const data = (await client.query(sql, [task, user_id])).rows;
    await client.query('COMMIT')
    return data;
  } catch (error) {
    await client.query('ROLLBACK')
    console.log(`createTaskDB: ${error.message}`);
    return [];
  }
}

async function updateTaskByIdDB(id, task, user_id) {
  const client = await pool.connect();
  try{
    await client.query('BEGIN')
    const sql = `update tasks set task = $1,user_id = $2 where id = $3 returning *`;
    const result = (await client.query(sql, [task, user_id, id])).rows;
    await client.query('COMMIT')
    return result;
  }catch(error){
    await client.query('ROLLBACK')
    console.log(`updateTaskDB: ${error.message}`);
    return [];
  }
}
async function patchDataTaskDB(id, clientObj) {
  const client = await pool.connect();
  try{
    await client.query('BEGIN')
    const sql1 = `select * from tasks where id=$1`;
    const oldObj = (await client.query(sql1, [id])).rows;
  
    const newObj = { ...oldObj[0], ...clientObj };
  
    const sql2 = `update tasks set task=$1,user_id=$2 where id=$3 returning *`;
    const result = (await client.query(sql2, [newObj.task, newObj.user_id, id])).rows;
    await client.query('COMMIT')
    return result;
  }catch(error){
    await client.query('ROLLBACK')
    console.log(`patchTaskDB: ${error.message}`);
    return [];
  }
}

async function deleteDataTaskDB(id) {
  const client = await pool.connect();
  try{
    await client.query('BEGIN')
    const sql = `delete from tasks where id=$1 returning *`;
    const data = (await client.query(sql, [id])).rows;
    await client.query('COMMIT')
    return data;

  }catch(error){
    await client.query('ROLLBACK')
    console.log(`deleteTaskDB: ${error.message}`);
    return [];
  }
}

module.exports = { getAllDataDB, getDataTaskByIdDB, createDataDB, updateTaskByIdDB, patchDataTaskDB, deleteDataTaskDB };
