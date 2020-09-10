const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Grievance = sequelize.define(
	"grievances",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        grievance_title: {
            type: DataTypes.STRING,
        },
        grievance_desc: {
            type: DataTypes.STRING,
        },
        grievance_filledon: {
            type: DataTypes.DATE,
        },
        grievance_status: {
            type: DataTypes.STRING,
        },
        user_assignedto: {
            type: DataTypes.BIGINT,
        }
	},
	{
		underscored: true,
	}
);
