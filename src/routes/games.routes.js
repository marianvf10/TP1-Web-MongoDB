const {Router} = require("express");
const routerGames = Router();
const controllerGames = require("../controllers/games.controllers");


routerGames.get("/",controllerGames.get);

routerGames.get("/:id",controllerGames.getById);

routerGames.post("/",controllerGames.add)

routerGames.put("/:id",controllerGames.update)

routerGames.delete("/:id",controllerGames.delete);

module.exports = routerGames;