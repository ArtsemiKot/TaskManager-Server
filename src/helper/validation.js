const Exceptiontype = require('../exception/exception');

function isValidTaskBody(req, res, next) {
  const { task, user_id } = req.body;
  if (!task) throw new Error(Exceptiontype.TASK_TITLE_EMPTY);
  if (!isNaN(task)) throw new Error(Exceptiontype.TASK_TITLE_INVALID);
  if (!user_id) throw new Error(Exceptiontype.TASK_TITLE_EMPTY);
  if (isNaN(user_id)) throw new Error(Exceptiontype.TASK_USER_ID_INVALID);

  next();
}

function isValidID(req, res, next) {
  const {id}= req.params;
  if (isNaN(id)) throw new Error(Exceptiontype.ID_NOT_A_NUMBER);
  if (id < 1) throw new Error(Exceptiontype.ID_NEGATIVE);

  next();
}

function isValidUserBody(req, res, next) {
  const { name, surname, email, pwd } = req.body;
  if (!name) throw new Error(Exceptiontype.USER_TITLE_EMPTY);
  if (!surname) throw new Error(Exceptiontype.USER_TITLE_EMPTY);
  if (!email) throw new Error(Exceptiontype.USER_TITLE_EMPTY);
  if (!pwd) throw new Error(Exceptiontype.USER_TITLE_EMPTY);
  if (!isNaN(name)) throw new Error(Exceptiontype.USER_NAME_INVALID);
  if (!isNaN(surname)) throw new Error(Exceptiontype.USER_SURNAME_INVALID);
  if (pwd.length < 8) throw new Error(Exceptiontype.USER_PASSWORD_LENGTH_VALID);
  if (!/^[A-z0-9\\\/\-\_\@]+(\@)(gmail|yandex|google|gmail|mail|vk)(.com|.ru|.by|.net)$/g.test(email))
    throw new Error(Exceptiontype.USER_PASSWORD_VALID);
  next();
}
module.exports = { isValidTaskBody, isValidID, isValidUserBody };
