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
  const sql = `insert into users(name, surname, email, pwd) values
    ($1,$2,$3,$4) returning *`;
  const data = (await client.query(sql, [name, surname, email, pwd])).rows;
  return data;
}
async function updateUsersDB(id, name, surname, email, pwd) {
  const client = await pool.connect();
  const sql = `update users set 
    name =$1, surname=$2, email = $3, pwd = $4
    where id = $5 returning *`;
  const data = (await client.query(sql, [name, surname, email, pwd, id])).rows;
  return data;
}

async function patchUsersDB(id, clientObj) {
  const client = await pool.connect();
  const sql = `select * from users where id = $1`;
  const oldObj = (await client.query(sql, [id])).rows;
  const newObj = { ...oldObj[0], ...clientObj };
  const sqlUpdate = `update users set name = $1, surname = $2, email = $3, pwd = $4
    where id = $5 returning *`;
  const result = (await client.query(sqlUpdate, [newObj.name, newObj.surname, newObj.email, newObj.pwd, id])).rows;
  return result;
}

async function deleteUserByIdDB(id) {
  const client = await pool.connect();
  const sql = `delete from users where id =$1 returning *`;

  const data = (await client.query(sql, [id])).rows;

  return data;
}

module.exports = { getAllUsersDB, getUserIDDB, createUsersDB, updateUsersDB, patchUsersDB, deleteUserByIdDB };
