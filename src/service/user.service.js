const { getAllUsersDB, getUserIDDB, createUsersDB, updateUsersDB, patchUsersDB, deleteUserByIdDB } = require('../repository/user.repository');

const ExceptionType = require('../exception/exception');
async function getAllUsers() {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_USER_NOT_FOUND);
  return data;
}

async function getUserID(id) {
  const data = await getUserIDDB(id);
  if (!data.length) throw new Error();
  return data;
}

async function createUsers(name, surname, email, pwd) {
  const data = await createUsersDB(name, surname, email, pwd);
  if (!data.length) throw new Error();
  return data;
}

async function updateUserByID(id, name, surname, email, pwd) {
  const data = await updateUsersDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error();
  return data;
}

async function patchUsers(id, clientObj) {
  const data = await patchUsersDB(id, clientObj);
  if (!data.length) throw new Error();
  return data;
}

async function deleteUserById(id) {
  const data = await deleteUserByIdDB(id);
  if (!data.length) throw new Error();

  return data;
}

module.exports = { getAllUsers, getUserID, createUsers, updateUserByID, patchUsers, deleteUserById };
