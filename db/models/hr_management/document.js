const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Document = sequelize.define(
	"documents",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        doc_name: {
            type: DataTypes.STRING,
        },
        doc_link: {
            type: DataTypes.STRING,
        },
        doc_shortlink: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
