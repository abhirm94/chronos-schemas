const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.DocumentType = sequelize.define(
	"document_types",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        doctype_name: {
            type: DataTypes.STRING,
        },
        doctype_desc: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
