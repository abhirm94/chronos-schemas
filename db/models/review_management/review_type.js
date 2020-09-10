const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.ReviewType = sequelize.define(
	"review_types",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        reviewtype_name: {
            type: DataTypes.STRING,
        },
        reviewtype_desc: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
