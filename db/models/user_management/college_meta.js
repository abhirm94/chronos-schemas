const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.CollegeMeta = sequelize.define(
	"college_metas",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		odd_sem_start_date: {
			type: DataTypes.DATE
		},
		even_sem_start_date: {
			type: DataTypes.DATE
		}
	},
	{
		underscored: true,
	}
);
