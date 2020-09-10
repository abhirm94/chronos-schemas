const db = {};
const sequelize = require('../db').sequelize

//Access Management
db.roles = require('./access_management/role').Role;
db.ranks = require('./access_management/rank').Rank;
db.permissions = require('./access_management/permission').Permission;
db.designations = sequelize.define('designations', {}, { timestamps: false });

//User and College Management
db.users = require('./user_management/user').User;
db.departments = require('./user_management/department').Department;
db.user_details = require('./user_management/user_detail').UserDetail;
db.user_qas = require('./user_management/user_qa').UserQA;
db.colleges = require('./user_management/college').College;
db.college_metas = require('./user_management/college_meta').CollegeMeta;
db.locations = require('./user_management/location').Location;

//HR ( Documents, Skilling, Training , Grievance Management)
db.documents = require('./hr_management/document').Document;
db.document_types = require('./hr_management/document_type').DocumentType;
db.grievances = require('./hr_management/grievance').Grievance;
db.skills = require('./hr_management/skill').Skill;
db.training_types = require('./hr_management/training_type').TrainingType;
db.trainings = require('./hr_management/training').Training;
db.training_metas = require('./hr_management/training_meta').TrainingMeta;

//Task Management
db.tasks = require('./task_management/task').Task;
db.task_metas = require('./task_management/task_meta').TaskMeta;
db.task_types = require('./task_management/task_type').TaskType;
db.task_categories = require('./task_management/task_category').TaskCategory;
db.user_tasks = sequelize.define('user_tasks', {}, { timestamps: false });

//Project Management
db.projects = require('./project_management/project').Project;
db.project_metas = require('./project_management/project_meta').ProjectMeta;
db.project_categories = require('./project_management/project_category').ProjectCategory;
db.sprints = require('./project_management/sprint').Sprint;

//Review Management
db.reviews = require('./review_management/review').Review;
db.review_types = require('./review_management/review_type').ReviewType;
db.comments = require('./review_management/comment').Comment;

module.exports = db;