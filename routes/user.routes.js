var express = require('express');
var router = express.Router();
var middleware = require('../middleware/user.middleware.js')
var users = require('../controllers/user.controller.js');

router.post('/add', users.addUser);
router.post('/add/college', users.addCollege);
router.post('/add/department', users.addDepartment);
router.post('/edit', users.editUser);
router.get('/', users.getAllUsers);
router.get('/samedeptsamecollege', middleware.checkUser, users.getSameDeptSameCollege);
router.get('/samedeptdifferentcollege', middleware.checkUser, users.getSameDeptDifferentCollege);
router.get('/samerolesamecollege', middleware.checkUser, users.getSameRoleSameCollege);
router.get('/sameroledifferentcollege', middleware.checkUser, users.getSameRoleDifferentCollege);
router.get('/roles', users.getAllRoles);
router.get('/skills', users.getAllSkills);

module.exports = router;