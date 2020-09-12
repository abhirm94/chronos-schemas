const Sequelize = require("sequelize");

const db = {};

// The cache configuration
var Redis = require("ioredis");
const { roles } = require("./models");
db.cache = Redis;

db.Sequelize = Sequelize;
db.Op = Sequelize.Op;
db.sequelize = require("../db");
db.models = require("./models");

//relations
//Designations
db.models.roles.belongsToMany(db.models.ranks, { through: db.models.designations });
db.models.ranks.belongsToMany(db.models.roles, { through: db.models.designations });

//Designations Permissions
db.models.designations.belongsToMany(db.models.permissions, { through: 'designation_permission' });
db.models.permissions.belongsToMany(db.models.designations, { through: 'designation_permission' });

//User UserDetails
db.models.users.belongsTo(db.models.user_details, { foreignKey: 'user_details_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//User College
db.models.users.belongsTo(db.models.colleges, { foreignKey: 'college_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//User Department
db.models.departments.hasMany(db.models.users, { as: 'users' });
db.models.users.belongsTo(db.models.departments, { foreignKey: 'dept_id', onUpdate: 'CASCADE' });

//User Role
db.models.users.belongsTo(db.models.roles, { foreignKey: 'role_id', onUpdate: 'CASCADE' });

//College CollegeMeta
db.models.colleges.belongsTo(db.models.college_metas, { foreignKey: 'college_meta_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//College location
db.models.colleges.hasMany(db.models.locations, { as: 'locations' });
db.models.locations.belongsTo(db.models.colleges, { foreignKey: 'college_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//User UserQA
db.models.users.belongsTo(db.models.user_qas, { foreignKey: 'user_qa_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//UserDetail Location
db.models.user_details.hasMany(db.models.locations, { as: 'locations' });
db.models.locations.belongsTo(db.models.user_details, { foreignKey: 'user_detail_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Document DocumentType
db.models.documents.belongsTo(db.models.document_types, { foreignKey: 'document_type_id', onUpdate: 'CASCADE' });

//Document Department
db.models.documents.belongsTo(db.models.departments, { foreignKey: 'dept_id', onUpdate: 'CASCADE' });

//Grievance User
db.models.grievances.belongsTo(db.models.users, { foreignKey: 'filed_by', onUpdate: 'CASCADE' });

//Users Skills
db.models.users.belongsToMany(db.models.skills, { through: 'user_skills' });
db.models.skills.belongsToMany(db.models.users, { through: 'user_skills' });

//Roles Skills
db.models.roles.belongsToMany(db.models.skills, { through: 'role_skills' });
db.models.skills.belongsToMany(db.models.roles, { through: 'role_skills' });

//TrainingType Skills
db.models.training_types.hasMany(db.models.skills, { as: 'skills' });
db.models.skills.belongsTo(db.models.training_types, { foreignKey: 'training_type_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Training TrainingType
db.models.trainings.belongsTo(db.models.training_types, { foreignKey: 'training_type_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Training TrainingMeta
db.models.trainings.belongsTo(db.models.training_metas, { foreignKey: 'training_meta_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Users Trainings
db.models.users.belongsToMany(db.models.trainings, { through: 'user_training' });
db.models.trainings.belongsToMany(db.models.users, { through: 'user_training' });

//Task TaskCategory
db.models.tasks.belongsTo(db.models.task_categories, { foreignKey: 'task_category_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Task TaskMeta
db.models.tasks.belongsTo(db.models.task_metas, { foreignKey: 'task_meta_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Task TaskType
db.models.tasks.belongsTo(db.models.task_types, { foreignKey: 'task_type_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//User Task
db.models.users.belongsToMany(db.models.tasks, { through: db.models.user_tasks });
db.models.tasks.belongsToMany(db.models.users, { through: db.models.user_tasks });

//Project ProjectCategory
db.models.projects.belongsTo(db.models.project_categories, { foreignKey: 'project_category_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Project ProjectMeta
db.models.projects.belongsTo(db.models.project_metas, { foreignKey: 'project_meta_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Project Documents
db.models.projects.hasMany(db.models.documents, { as: 'documents' });
db.models.documents.belongsTo(db.models.projects, { foreignKey: 'project_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Sprint Tasks
db.models.sprints.hasMany(db.models.tasks, { as: 'tasks' });
db.models.tasks.belongsTo(db.models.sprints, { foreignKey: 'sprint_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Sprint Documents
db.models.sprints.hasMany(db.models.documents, { as: 'documents' });
db.models.documents.belongsTo(db.models.sprints, { foreignKey: 'sprint_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Sprint Project
db.models.sprints.belongsTo(db.models.projects, { foreignKey: 'project_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Review ReviewType
db.models.reviews.belongsTo(db.models.review_types, { foreignKey: 'review_type_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//ProjectMeta Reviews
db.models.project_metas.hasMany(db.models.reviews, { as: 'reviews' });
db.models.reviews.belongsTo(db.models.project_metas, { foreignKey: 'project_meta_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//User_Tasks Reviews
db.models.user_tasks.hasMany(db.models.reviews, { as: 'reviews' });
db.models.reviews.belongsTo(db.models.user_tasks, { foreignKey: 'user_task_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Users Reviews
db.models.users.hasMany(db.models.reviews, { as: 'reviews' });
db.models.reviews.belongsTo(db.models.users, { foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//Grievance Comment
db.models.grievances.hasMany(db.models.comments, { as: 'comments' });
db.models.comments.belongsTo(db.models.grievances, { foreignKey: 'grievance_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//TaskMeta Comment
db.models.task_metas.hasMany(db.models.comments, { as: 'comments' });
db.models.comments.belongsTo(db.models.task_metas, { foreignKey: 'task_meta_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = db;
