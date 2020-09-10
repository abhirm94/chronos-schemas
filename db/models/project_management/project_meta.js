const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.ProjectMeta = sequelize.define(
	"project_metas",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        health: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
