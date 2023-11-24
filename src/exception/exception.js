const Exceptiontype = {
  TASK_TITLE_EMPTY: 'no data',
  TASK_TITLE_INVALID: 'encorrect task',
  TASK_USER_ID_INVALID: 'encorrect user ID',
  ID_NOT_A_NUMBER: 'not a number',
  ID_NEGATIVE: 'ID should not be negative',

  DB_GET_TASKS_NOT_FOUND: 'table tasks is empty',
  DB_GET_TASK_BY_ID_NOT_FOUND: 'task by id is not found',
  DB_POST_TASK_NOT_CREATE: 'task does not create',
  DB_PUT_TASK_NOT_UPDATE: 'task does not update',
  DB_PATCH_TASK_NOT_UPDATE: 'task does not patch update',
  DB_DELETE_TASK_NOT_DELETE: 'task does not delete',

  USER_TITLE_EMPTY: 'no data',
  USER_NAME_INVALID: 'incorrect name',
  USER_SURNAME_INVALID: 'incorrect surname',
  USER_PASSWORD_LENGTH_VALID: 'the length must be more than 8 characters',
  USER_PASSWORD_VALID: 'email entered incorrectly',

  DB_GET_USER_NOT_FOUND: 'table user is empty',
  DB_GET_USER_BY_ID_NOT_FOUND: 'user by id is not found',
  DB_POST_USER_NOT_CREATE: 'user does not create',
  DB_PUT_USER_NOT_UPDATE: 'user does not update',
  DB_PATCH_USER_NOT_UPDATE: 'user does not patch update',
  DB_DELETE_USER_NOT_DELETE: 'user does not delete',

  DB_CREATE_USER_BY_EMAIL_NOT_FOUND: 'User has already exist',
  DB_AUTH_USER_BY_EMAIL: 'Email not found'
};

module.exports = Exceptiontype;
