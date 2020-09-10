const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Training = sequelize.define(
	"trainings",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        training_title: {
            type: DataTypes.STRING,
        },
        training_date: {
            type: DataTypes.DATE,
        },
	},
	{
		underscored: true,
	}
);
