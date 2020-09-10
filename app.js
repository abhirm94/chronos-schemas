var express = require("express");
var bodyParser = require("body-parser");

var db = require("./db/db");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.status(200).json({
		message: "Welcome to Chronos!",
	});
});

db.connectDb();

module.exports = app;
