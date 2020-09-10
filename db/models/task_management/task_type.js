const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.TaskType = sequelize.define(
	"task_types",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        tasktype_name: {
            type: DataTypes.STRING,
        },
        tasktype_desc: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
