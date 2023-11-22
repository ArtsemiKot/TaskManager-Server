const pool = require('../db');

async function getAllUsersDB() {
  const client = await pool.connect();
  const sql = `select * from users`;
  const data = (await client.query(sql)).rows;
  return data;
}

async function getUserIDDB(id) {
  const client = await pool.connect();
  const sql = `select * from users where id= $1`;
  const data = (await client.query(sql, [id])).rows;
  return data;
}

async function createUsersDB(name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `insert into users(name, surname, email, pwd) values
      ($1,$2,$3,$4) returning *`;
    const data = (await client.query(sql, [name, surname, email, pwd])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`createUserDB: ${error.message}`);
    return [];
  }
}
async function updateUsersDB(id, name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `update users set 
      name =$1, surname=$2, email = $3, pwd = $4
      where id = $5 returning *`;
    const data = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`updateUserDB: ${error.message}`);
    return [];
  }
}

async function patchUsersDB(id, clientObj) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql_select = `select * from users where id = $1`;
    const oldObj = (await client.query(sql_select, [id])).rows;
    console.log(oldObj);
    const newObj = { ...oldObj[0], ...clientObj };
    const sql_update = `update users set name = $1, surname = $2, email = $3, pwd = $4
      where id = $5 returning *`;
    const result_update = (await client.query(sql_update, [newObj.name, newObj.surname, newObj.email, newObj.pwd, id])).rows;
    await client.query('COMMIT');
    return result_update;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`patchUserDB: ${error.message}`);
    return [];
  }
}

async function deleteUserByIdDB(id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `delete from users where id =$1 returning *`;

    const data = (await client.query(sql, [id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`deleteUserDB: ${error.message}`);
    return [];
  }
}

module.exports = { getAllUsersDB, getUserIDDB, createUsersDB, updateUsersDB, patchUsersDB, deleteUserByIdDB };
