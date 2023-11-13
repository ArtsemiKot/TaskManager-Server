const Exceptiontype = {
    TASK_TITLE_EMPTY:'no data',
    TASK_TITLE_INVALID:'encorrect task',
    TASK_USER_ID_INVALID:'encorrect user ID',
    ID_NOT_A_NUMBER: 'not a number',
    ID_NEGATIVE:'ID should not be negative',


    DB_GET_TASKS_NOT_FOUND:'table tasks is empty',
    DB_GET_TASK_BY_ID_NOT_FOUND:'task by id is not found',
    DB_POST_TASK_NOT_CREATE:'task does not create',
    DB_PUT_TASK_NOT_UPDATE:'task does not update',
    DB_PATCH_TASK_NOT_UPDATE:'task does not patch update',
    DB_DELETE_TASK_NOT_DELETE:'task does not delete'
}

module.export = Exceptiontype;