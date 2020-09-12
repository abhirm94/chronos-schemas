var db = require("../db/models/db");

async function public_force() {
	console.log("Public force executed");

	try {
		//Access Management
		await db.models.permissions.create({});
		role1 = await db.models.ranks.create({});
		rank1 = await db.models.roles.create({});

		//User Management
		userDetail1 = await db.models.user_details.create({});
		qa1 = await db.models.user_qas.create({});
		dept1 = await db.models.departments.create({});
		collegemeta1 = await db.models.college_metas.create({});
		college1 = await db.models.colleges.create({
			college_meta_id: 1,
		});
		locat1 = await db.models.locations.create({
			college_id: 1,
			user_detail_id: 1,
		});
		user1 = await db.models.users.create({
			email: "user1@example.com",
			password_hash: "password_hash",
			user_details_id: 1,
			college_id: 1,
			dept_id: 1,
			role_id: 1,
			college_id: 1,
			user_qa_id: 1,
		});

		//HR Management
		docType1 = await db.models.document_types.create({});
		griv1 = await db.models.grievances.create({
			filed_by: 1,
		});
		trainingMeta1 = await db.models.training_metas.create({});
		trainingtype1 = await db.models.training_types.create({});
		training1 = await db.models.trainings.create({
			training_type_id: 1,
			training_meta_id: 1,
		});
		skill1 = await db.models.skills.create({
			training_type_id: 1,
		});
		rtype1 = await db.models.review_types.create({});
		pmeta1 = await db.models.project_metas.create({});

		pcat1 = await db.models.project_categories.create({});
		project1 = await db.models.projects.create({
			project_category_id: 1,
			project_meta_id: 1,
		});

		//Task Management
		tcat1 = await db.models.task_categories.create({});
		ttype1 = await db.models.task_types.create({});
		tmeta1 = await db.models.task_metas.create({});
		task1 = await db.models.tasks.create({
			task_category_id: 1,
			task_meta_id: 1,
			task_type_id: 1,
		});

		user1.addTask(task1, { through: { selfGranted: false } });
		task1.addUser(user1, { through: { selfGranted: false } });
		comment1 = await db.models.comments.create({
			grievance_id: 1,
			task_meta_id: 1,
		});
		rev1 = await db.models.reviews.create({
			review_type_id: 1,
			project_meta_id: 1,
			user_task_id: 1,
			user_id: 1,
		});

		sprint1 = await db.models.sprints.create({
			project_id: 1,
			review_id: 1,
		});
		doc1 = await db.models.documents.create({
			document_type_id: 1,
			dept_id: 1,
			project_id: 1,
			sprint_id: 1,
		});

		//relations
		role1.addRanks(rank1, { through: { selfGranted: false } });
		rank1.addRole(role1, { through: { selfGranted: false } });

		user1.addSkill(skill1, { through: { selfGranted: false } });
		skill1.addUser(user1, { through: { selfGranted: false } });

		role1.addSkill(skill1, { through: { selfGranted: false } });
		skill1.addRole(role1, { through: { selfGranted: false } });

		user1.addTraining(training1, { through: { selfGranted: false } });
		training1.addUser(user1, { through: { selfGranted: false } });
	} catch (e) {
		console.log(e);
	}
}

async function main() {
	var schema = ["sequelize", true, public_force];

	console.log("Creating the tables");

	console.log(schema);
	public_ret = await db[schema[0]].sequelize.sync({ force: schema[1] });

	console.log(schema[0] + " created");
	if (schema[1]) {
		force_ret = await schema[2]();
		console.log(schema[0] + " force param executed " + force_ret);
	}
	console.log("\n\n\n\n\n");
	process.exit();
}

if (require.main == module) {
	main();
}
