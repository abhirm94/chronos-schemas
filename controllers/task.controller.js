var moment = require('moment'); 
const db = require("../db/models/db");
const config = require("../config/config");
moment().format();

module.exports.getTasksToday = async (req, res) => {
	try {
        const user = req.user;
        const u = await db.models.user.findOne({
            where: { id : user.id },
            include: [{
                model : db.models.tasks
            }]
        })

        const user_tasks = u.tasks;
        const today_tasks = [];
        const today = new Date();
        for (i in user_tasks)  {
            if(i.task_date.getDate() === today.getDate() && i.task_date.getMonth() === today.getMonth() && i.task_date.getFullYear() === today.getFullYear) {
                today_tasks.push(i);
            }
        }
        res.status(200).json({
            success: true,
            task_count: today_tasks.length,
            tasks: today_tasks
        })

	} catch (e) {
		console.log(e);
		res.status(500).send({
			success: false,
			message: "Internal Server Error",
			error: e.message,
		});
	}
};

module.exports.getTasksMonth = async (req, res) => {
	try {
        const user = req.user;
        const u = await db.models.user.findOne({
            where: { id : user.id },
            include: [{
                model : db.models.tasks
            }]
        })

        const user_tasks = u.tasks;
        const today_tasks = [];
        const today = new Date();
        for (i in user_tasks)  {
            if(i.task_date.getMonth() === today.getMonth() && i.task_date.getFullYear() === today.getFullYear) {
                today_tasks.push(i);
            }
        }
        res.status(200).json({
            success: true,
            task_count: today_tasks.length,
            tasks: today_tasks
        })

	} catch (e) {
		console.log(e);
		res.status(500).send({
			success: false,
			message: "Internal Server Error",
			error: e.message,
		});
	}
};

module.exports.getTasksWeek = async (req, res) => {
	try {
        const user = req.user;
        const u = await db.models.user.findOne({
            where: { id : user.id },
            include: [{
                model : db.models.tasks
            }]
        })

        const user_tasks = u.tasks;
        const today_tasks = [];
        const today = moment();
        for (i in user_tasks)  {
            var dte = moment(i.task_date.toString());
            if(dte.isoWeek() == today.isoWeek()){
                today_tasks.push(i);
            }
        }
        res.status(200).json({
            success: true,
            task_count: today_tasks.length,
            tasks: today_tasks
        })

	} catch (e) {
		console.log(e);
		res.status(500).send({
			success: false,
			message: "Internal Server Error",
			error: e.message,
		});
	}
};