const db = require("../../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Location = sequelize.define(
	"locations  ",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
        },
        address1: {
            type: DataTypes.STRING,
        },
        street: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        zip: {
            type: DataTypes.STRING,
        },
        lat: {
            type: DataTypes.FLOAT,
        },
        long: {
            type: DataTypes.FLOAT,
        }
	},
	{
		underscored: true,
	}
);
