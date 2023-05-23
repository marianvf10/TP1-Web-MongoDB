const express = require('express');
const morgan = require("morgan");
const conexionDB = require("./db.connection");
const routerGames = require("./routes/games.routes");
const app = express();

//call to DB
conexionDB();

//settings
app.set("name","rest-api-nodejs");
app.set("port",process.env.port || 4500)

//middleware
app.use(express.json())
app.use(morgan())
//Route calling

app.use("/api/games",routerGames);

app.use(express.static("public"));

module.exports = app;