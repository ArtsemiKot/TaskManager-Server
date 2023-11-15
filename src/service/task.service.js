const { getAllTasksDB, getTaskByIdDB } = require('../repository/task.repository');
const ExceptionType = require('../exception/exception');

async function getAllTasks() {
  const data = await getAllTasksDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_TASKS_NOT_FOUND);

  return data;
}

async function getTaskById(id) {
    const data = await getTaskByIdDB(id);
    if (!data.length) throw new Error(ExceptionType.DB_GET_TASK_BY_ID_NOT_FOUND);

    return data;
}

module.exports = { getAllTasks, getTaskById };
