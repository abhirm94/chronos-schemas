const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.TaskCategory = sequelize.define(
	"task_categories",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        taskcategory_name: {
            type: DataTypes.STRING,
        },
        taskcategory_desc: {
            type: DataTypes.STRING,
        },
        task_tags: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
