const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.TrainingMeta = sequelize.define(
	"training_metas",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        training_cover: {
            type: DataTypes.STRING,
        },
        training_tags: {
            type: DataTypes.STRING,
        },
        training_desc: {
            type: DataTypes.STRING,
        },
        training_price: {
            type: DataTypes.STRING,
        },
        training_attendance: {
            type: DataTypes.BIGINT,
        }
	},
	{
		underscored: true,
	}
);
