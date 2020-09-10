const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.UserQA = sequelize.define(
	"user_qas",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        answer: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
