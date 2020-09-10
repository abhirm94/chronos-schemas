const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Sprint = sequelize.define(
	"sprints",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        sprint_startdate: {
            type: DataTypes.DATE,
        }
	},
	{
		underscored: true,
	}
);
