var config = require("../config/config")
var db = require('../db/models/db')

module.exports.checkUser = async(req, res, next) => {
    console.log(req.user)
    console.log(req.headers)
    try {
        if (!req.headers.id) {
            res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
            return;
        }
        const user = await db.models.users.findOne({ where: { id: req.headers.id } })
        req.user = user;
        next();
    } catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: e.message,
        });
    }
}