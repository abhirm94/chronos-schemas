const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Project = sequelize.define(
	"projects",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        desc: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        start_date: {
            type: DataTypes.DATE,
        },
        end_date: {
            type: DataTypes.DATE,
        }
	},
	{
		underscored: true,
	}
);
