const express = require("express");
const router = express.Router();

//route imports
const taskRouter = require('./task.routes.js');
const userRouter = require('./user.routes.js');
const grievanceRouter = require('./grievance.routes.js');

//routes inits
router.use('/tasks', taskRouter);
router.use('/users', userRouter);
router.use('/grievances', grievanceRouter);

module.exports = router;