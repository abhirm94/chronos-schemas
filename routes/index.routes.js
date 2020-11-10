const express = require("express");
const router = express.Router();

//route imports
const taskRouter = require('./task.routes.js');

//routes inits
router.use('/tasks', taskRouter);

module.exports = router;