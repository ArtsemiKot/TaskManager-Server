const { getAllDataDB, getDataTaskByIdDB, createDataDB, updateTaskByIdDB, patchTaskDB, deleteDataTaskDB } = require('../repository/task.repository');

const Exceptiontype = require('../exception/exception');

async function getAllData() {
  const data = await getAllDataDB();
  if (!data.length) throw new Error(Exceptiontype.DB_GET_TASKS_NOT_FOUND);
  return data;
}

async function getDataTaskById(id) {
  const data = await getDataTaskByIdDB(id);
  if (!data.length) throw new Error(Exceptiontype.DB_GET_TASK_BY_ID_NOT_FOUND);
  return data;
}

async function createData(task, user_id) {
  const data = await createDataDB(task, user_id);
  if (!data.length) throw new Error(Exceptiontype.DB_POST_TASK_NOT_CREATE);
  return data;
}

async function updateTaskById(id, task, user_id) {
  const data = await updateTaskByIdDB(id, task, user_id);
  if (!data.length) throw new Error(Exceptiontype.DB_PUT_TASK_NOT_UPDATE);
  return data;
}

async function patchTask(id, clientObj) {
  const data = await patchTaskDB(id, clientObj);
  if (!data.length) throw new Error(Exceptiontype.DB_PATCH_TASK_NOT_UPDATE);
  return data;
}
async function deleteDataTask(id) {
  const data = await deleteDataTaskDB(id);
  if (!data.length) throw new Error(Exceptiontype.DB_DELETE_TASK_NOT_DELETE);
  return data;
}

module.exports = { getAllData, createData, deleteDataTask, getDataTaskById, updateTaskById, patchTask };
