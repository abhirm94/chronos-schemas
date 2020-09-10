const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.TaskMeta = sequelize.define(
	"task_meta",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        task_desc: {
            type: DataTypes.STRING,
        },
        task_duedate: {
            type: DataTypes.DATE,
        }  
	},
	{
		underscored: true,
	}
);
