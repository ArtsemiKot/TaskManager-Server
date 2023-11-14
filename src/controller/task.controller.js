const express = require('express');
const { getAllTasks } = require('../service/task.service');
const { buildResponse } = require('../helper/buildRespone');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getAllTasks();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
