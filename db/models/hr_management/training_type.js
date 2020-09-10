const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.TrainingType = sequelize.define(
	"training_types",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        trainingtype_name: {
            type: DataTypes.STRING,
        },
        trainingtype_desc: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
