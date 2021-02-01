const db = require("../db/models/db");

module.exports.getAllGrievances = async(req, res) => {
    await db.models.grievances.findAll().then(grievances => {
        res.status(200).json({
            success: true,
            grievances
        })
    }).catch(err => {
        res.status(500).json({
            success: false,
            err
        })
    })
}

module.exports.addGrievance = async(req, res) => {
    let { grievance_title, grievance_desc, grievance_filledon, grievance_status, user_assignedto } = req.body;
    let filed_by = req.user.id;
    await db.models.grievances.create({
        grievance_title,
        grievance_desc,
        grievance_filledon,
        grievance_status,
        user_assignedto,
        filed_by
    }).then(grievance => {
        res.status(200).json({
            success: true,
            grievance
        })
    }).catch(err => {
        res.status(500).json({
            success: false,
            err
        })
    })
}

module.exports.editGrievance = async(req, res) => {
    let { grievance_title, grievance_desc, grievance_filledon, grievance_status, user_assignedto } = req.body;
    let filed_by = req.user.id;
    await db.models.grievances.update({
        grievance_title,
        grievance_desc,
        grievance_filledon,
        grievance_status,
        user_assignedto,
        filed_by
    }, { where: { id: req.body.id, filed_by: req.user.id }, returning: true }).then(grievance => {
        res.status(200).json({
            success: true,
            grievance
        })
    }).catch(err => {
        res.status(500).json({
            success: false,
            err
        })
    })
}