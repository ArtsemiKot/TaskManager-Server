const Exceptiontype = require('../exception/exception');

function isValidTaskBody(req, res, next) {
  const { task, user_id } = req.body;
  if (!task) throw new Error(Exceptiontype.TASK_TITLE_EMPTY);
  if (!isNaN(task)) throw new Error(Exceptiontype.TASK_TITLE_INVALID);
  if (!user_id) throw new Error(Exceptiontype.TASK_TITLE_EMPTY);
  if (!isNaN(user_id)) throw new Error(Exceptiontype.TASK_USER_ID_INVALID);

  next();
}

function isValidID(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error();
  next();
}
module.exports = { isValidTaskBody, isValidID };
