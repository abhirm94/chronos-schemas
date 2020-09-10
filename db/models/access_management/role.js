const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Role = sequelize.define(
	"roles",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        role_name: {
            type: DataTypes.STRING,
        },
        role_desc: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
