const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Skill = sequelize.define(
	"skills",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        skill_name: {
            type: DataTypes.STRING,
        },
        skill_desc: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
