var express = require('express');
var router = express.Router();
var tasks = require('../controllers/task.controller.js');
var middleware = require('../middleware/user.middleware.js')

router.get('/get/today', middleware.checkUser, tasks.getTasksToday)
router.get('/get/week', middleware.checkUser, tasks.getTasksWeek)
router.post('/get/month', middleware.checkUser, tasks.getTasksMonth)

module.exports = router;