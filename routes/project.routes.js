var express = require('express');
var router = express.Router();
var projects = require('../controllers/project.controller.js');
var middleware = require('../middleware/user.middleware.js')

router.get('/get/current', middleware.checkUser, projects.getCurrentProjects)
router.get('/get/complete', middleware.checkUser, projects.getCompletedProjects)
router.get('/get', middleware.checkUser, projects.getIndividualProject)

module.exports = router;