const { getAllUsersDB, getUserIDDB, createUsersDB, updateUsersDB, patchUsersDB, deleteUserByIdDB } = require('../repository/user.repository');

const Exceptiontype = require('../exception/exception');
async function getAllUsers() {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error(Exceptiontype.DB_GET_USER_NOT_FOUND);
  return data;
}

async function getUserID(id) {
  const data = await getUserIDDB(id);
  if (!data.length) throw new Error(Exceptiontype.DB_GET_USER_BY_ID_NOT_FOUND);
  return data;
}

async function createUsers(name, surname, email, pwd) {
  const data = await createUsersDB(name, surname, email, pwd);
  if (!data.length) throw new Error(Exceptiontype.DB_POST_USER_NOT_CREATE);
  return data;
}

async function updateUserByID(id, name, surname, email, pwd) {
  const data = await updateUsersDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error(Exceptiontype.DB_PUT_USER_NOT_UPDATE);
  return data;
}

async function patchUserByID(id, clientObj){
  const data = await patchUsersDB(id, clientObj);
  if (!data.length) throw new Error(Exceptiontype.DB_PATCH_USER_NOT_UPDATE);
  return data;
}

async function deleteUserById(id) {
  const data = await deleteUserByIdDB(id);
  if (!data.length) throw new Error(Exceptiontype.DB_DELETE_USER_NOT_DELETE);

  return data;
}

module.exports = { getAllUsers, getUserID, createUsers, updateUserByID, patchUserByID, deleteUserById };
