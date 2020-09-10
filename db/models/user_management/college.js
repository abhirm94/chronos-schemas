const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.College = sequelize.define(
	"colleges",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        college_name: {
            type: DataTypes.STRING,
        },
        college_shortname: {
            type: DataTypes.STRING,
        },
        college_propic: {
            type: DataTypes.STRING,
        },
        college_branch: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
