const { getAllTasksDB } = require('../repository/task.repository');
const ExceptionType = require('../exception/exception');

async function getAllTasks() {
  const data = await getAllTasksDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_TASKS_NOT_FOUND);

  return data;
}

module.exports = { getAllTasks };
