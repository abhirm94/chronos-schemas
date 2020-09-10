const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.UserDetail = sequelize.define(
	"user_details",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        phone: {
            type: DataTypes.STRING,
        },
        bio: {
            type: DataTypes.STRING,
        },
        hobbies: {
            type: DataTypes.STRING,
        }
	},
	{
		underscored: true,
	}
);
