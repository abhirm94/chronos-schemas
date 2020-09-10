const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Rank = sequelize.define(
	"ranks",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        rank_name: {
            type: DataTypes.STRING,
        },
        rank_desc: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
