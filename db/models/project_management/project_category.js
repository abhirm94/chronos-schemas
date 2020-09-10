const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.ProjectCategory = sequelize.define(
	"project_categories",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        projectcategory_name: {
            type: DataTypes.STRING,
        },
        projectcategory_desc: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
