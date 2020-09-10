const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Department = sequelize.define(
	"departments",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        dept_name: {
            type: DataTypes.STRING,
        },
        dept_desc: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
