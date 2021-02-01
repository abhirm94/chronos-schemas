const db = require("../db/models/db");
const config = require("../config/config");
const users = require('../db/models/user_management/user');

module.exports.getSameDeptSameCollege = async(req, res) => {
    try {
        const user = req.headers;
        const u = await db.models.users.findOne({
                where: { id: user.id },
                include: [{
                    model: db.models.users,
                    include: [{
                            model: db.models.users
                        },
                        {
                            model: db.models.colleges
                        },
                        {
                            model: db.models.departments
                        }
                    ]
                }]
            })
            // const c = await db.models.colleges.findAll();
        res.status(200).json({
            success: true,
            users: u
        })

    } catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: e.message,
        });
    }
}

module.exports.addUser = async(req, res) => {
    db.models.users.create({
        email: req.body.email,
        password_hash: req.body.password_hash
    }).then(user => {
        console.log(user);
        res.status(200).json({
            success: true,
            user
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({ success: false, err })
    })
}

module.exports.editUser = async(req, res) => {
    db.models.users.update({
        college_id: req.body.college_id,
        dept_id: req.body.dept_id,
        email: req.body.email,
        password_hash: req.body.password_hash,
        user_details_id: req.body.user_details_id,
        role_id: req.body.role_id,
        user_qa_id: req.body.user_qa_id
    }, { where: { id: req.body.id }, returning: true }).then(user => {
        res.status(200).json({ success: true, user });
    }).catch(err => res.status(500).json({ success: false, err }))
}

module.exports.addCollege = async(req, res) => {
    db.models.colleges.create({
        college_name: req.body.college_name,
        college_shortname: req.body.college_shortname,
        college_propic: req.body.college_propic,
        college_branch: req.body.college_branch,
    }).then(college => {
        console.log(college);
        res.status(200).json({
            success: true,
            college
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({ success: false, err })
    })
}
module.exports.addDepartment = async(req, res) => {
    db.models.departments.create({
        dept_name: req.body.dept_name,
        dept_desc: req.body.dept_desc
    }).then(dept => {
        console.log(dept);
        res.status(200).json({
            success: true,
            dept
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({ success: false, err })
    })
}

module.exports.getAllUsers = async(req, res) => {
    db.models.users.findAll().then(users => {
        res.status(200).json({
            success: true,
            users
        })
    }).catch(err => {
        res.status(500).json({ success: false, err })
    })
}

module.exports.getSameDeptSameCollege = async(req, res) => {
    db.models.users.findAll({
        where: {
            dept_id: req.user.dept_id,
            college_id: req.user.college_id,
            id: {
                [
                    db.Sequelize.Op.not
                ]: req.user.id
            }
        }
    }).then(users => {
        res.status(200).json({ success: true, users })
    }).catch(err => {
        res.status(500).json({ success: false, err })
    })
}

module.exports.getSameRoleSameCollege = async(req, res) => {
    await db.models.users.findAll({
        where: {
            role_id: req.user.role_id,
            college_id: req.user.college_id,
            id: {
                [
                    db.Sequelize.Op.not
                ]: req.user.id
            }
        }
    }).then(users => {
        res.status(200).json({ success: true, users })
    }).catch(err => {
        res.status(500).json({ success: false, err })
    })
}

module.exports.getSameRoleDifferentCollege = async(req, res) => {
    await db.models.users.findAll({
        where: {
            role_id: req.user.role_id,
            id: {
                [
                    db.Sequelize.Op.not
                ]: req.user.id
            },
            college_id: {
                [
                    db.Sequelize.Op.not
                ]: req.user.college_id
            },
        }
    }).then(users => {
        res.status(200).json({ success: true, users })
    }).catch(err => {
        res.status(500).json({ success: false, err })
    })
}

module.exports.getSameDeptDifferentCollege = async(req, res) => {
    db.models.users.findAll({
        where: {
            dept_id: req.user.dept_id,
            id: {
                [
                    db.Sequelize.Op.not
                ]: req.user.id
            },
            college_id: {
                [
                    db.Sequelize.Op.not
                ]: req.user.college_id
            }
        }
    }).then(users => {
        res.status(200).json({ success: true, users })
    }).catch(err => {
        res.status(500).json({ success: false, err })
    })
}

module.exports.getAllRoles = async(req, res) => {
    db.models.roles.findAll().then(roles => {
        res.status(200).json({ success: true, roles })
    }).catch(err => {
        res.status(500).json({ success: false, err })
    })
}

module.exports.getAllSkills = async(req, res) => {
    db.models.skills.findAll().then(skills => {
        res.status(200).json({ success: true, skills })
    }).catch(err => {
        res.status(500).json({ success: false, err })
    })
}