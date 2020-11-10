const db = require("../db/models/db");
const config = require("../config/config");

module.exports.getCurrentProjects = async (req, res) => {
    try {
        const user = await db.models.users.findOne({ 
            where: { id: req.user.id },
            include : [
                {
                    model: db.models.projects,
                    include: [
                        {
                            model: db.models.project_categories
                        },
                        {
                            model: db.models.project_metas
                        },
                        {
                            model: db.models.sprints
                        },
                        {
                            model: db.models.documents
                        }
                    ]
                }
            ]
        })
        const user_projects = user.projects;
        var projects = [];
        for (i in user_projects) {
            var start = moment(i.start_date.toString());
            var end = moment(i.end_date.toString());
            var now = moment();
            if (start.isBefore(now) && end.isAfter(now)) {
                projects.push(i);
            }
        }
        res.status(200).json({
            success: true,
            project_count: projects.length,
            projects
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

module.exports.getCompletedProjects = async (req, res) => {
    try {
        const user = await db.models.users.findOne({ 
            where: { id: req.user.id },
            include : [
                {
                    model: db.models.projects,
                    include: [
                        {
                            model: db.models.project_categories
                        },
                        {
                            model: db.models.project_metas
                        },
                        {
                            model: db.models.sprints
                        },
                        {
                            model: db.models.documents
                        }
                    ]
                }
            ]
        })
        const user_projects = user.projects;
        var projects = [];
        for (i in user_projects) {
            var end = moment(i.end_date.toString());
            var now = moment();
            if (end.isBefore(now)) {
                projects.push(i);
            }
        }
        res.status(200).json({
            success: true,
            project_count: projects.length,
            projects
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

module.exports.getIndividualProject = async (req, res) => {
    try {
        const project = await db.models.projects.findOne({ 
            where: { id: req.params.id },
            include : [
                {
                    model: db.models.project_categories
                },
                {
                    model: db.models.project_metas
                },
                {
                    model: db.models.sprints
                },
                {
                    model: db.models.documents
                }
            ]
        })
        if (project) {
            res.status(200).json({
                success: true,
                project
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Not Found",
                error: "No such project_id"
            })
        }
    } catch (e) {
		console.log(e);
		res.status(500).send({
			success: false,
			message: "Internal Server Error",
			error: e.message,
		});
	}
}