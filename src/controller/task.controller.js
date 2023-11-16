const express = require('express');
const { getAllData, getDataTaskById, createData, updateTaskById, patchDataTask, deleteDataTask } = require('../service/task.service');
const {buildResponse} = require('../helper/buildRespone');
const { isValidTaskBody, isValidID } = require('../helper/validation');
const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getAllData();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getDataTaskById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', isValidTaskBody, async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createData(task, user_id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidTaskBody, isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const { task, user_id } = req.body;
    const data = await updateTaskById(id, task, user_id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.patch('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;
    const data = await patchDataTask(id, clientObj);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteDataTask(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
