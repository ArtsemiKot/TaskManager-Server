const bcrypt = require('bcrypt');
const Exceptiontype = require('../exception/exception');
const { getUserByEmail, createUserDB } = require('../repository/api.repository');
const salt = 10;

async function createUser(name, surname, email, pwd) {
  const user = await getUserByEmail(email);
  if (user.length) throw new Error(Exceptiontype.DB_CREATE_USER_BY_EMAIL_NOT_FOUND);

  const hashPWD = await bcrypt.hash(pwd, salt);

  const data = await createUserDB(name, surname, email, hashPWD);
  if (!data.length) throw new Error(Exceptiontype.DB_POST_USER_NOT_CREATE);
  return data;
}

async function authUser(email, pwd) {
  const user = await getUserByEmail(email);
  if (!user.length) throw new Error(Exceptiontype.DB_AUTH_USER_BY_EMAIL);

  const pwdUserHash = user[0].pwd;

  if (!(await bcrypt.compare(pwd, pwdUserHash))) throw new Error(Exceptiontype.PWD_HASHED_MATCH);
  return user;
}
module.exports = { createUser, authUser };
