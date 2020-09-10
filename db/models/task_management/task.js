const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Task = sequelize.define(
	"tasks",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        task_title: {
            type: DataTypes.STRING,
        },
        task_date: {
            type: DataTypes.DATE,
        },
        task_status: {
            type: DataTypes.STRING,
        }   
	},
	{
		underscored: true,
	}
);
