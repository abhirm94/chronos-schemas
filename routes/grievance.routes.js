var express = require('express');
var router = express.Router();
var middleware = require('../middleware/user.middleware.js')
var grievance = require('../controllers/grievance.controller.js');

router.get('/', grievance.getAllGrievances);
router.post('/add', middleware.checkUser, grievance.addGrievance);
router.post('/edit', middleware.checkUser, grievance.editGrievance);

module.exports = router;