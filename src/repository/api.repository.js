const { hash } = require('bcrypt');
const pool = require('../db');
const { createUser } = require('../service/api.service');
async function getUserByEmail(email) {
    const client = await pool.connect();
    const sql = `select * from users where email = $1`;
    const result = (await client.query(sql, [email])).rows;
    return result;
}

async function createUserDB(name, surname, email, hashPWD){
    const client = await pool.connect();
    sql_create = `insert into users (name, surname, email, pwd) values
    ($1, $2, $3, $4) returning *`;
    const result = (await client.query(sql_create, [name, surname, email, hashPWD])).rows;
    return result;
}

module.exports = { getUserByEmail, createUserDB };