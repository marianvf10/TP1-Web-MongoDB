const { json } = require("express");
const Game = require("../Models/Game");
const {validateName, validateId} = require("../tools/validations");

//Para hacer las pruebas de getById,delete y update necesito una id valida

exports.get = async(req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (error) {
        res.json(error);
    }
};

exports.getById = async(req, res) => {
    try {

        const id = req.params.id;
        if (validateId(id)) {
        //verifico que la "id" tengo el formato de mongo
            const game = await Game.findById(id);
            console.log(id,game);
            if (game != null) {
                //verifico que exista un juego con esa id
                res.status(200).json(game);
            }
            res.status(404).json({msj: "La id ingresada no corresponde a ningun juego existente",isOk:false});
          }
    
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.add = async (req, res) => {
    try {

        const {nombre, consola, precio, genero,estreno, descripcion, imagen } = req.body;
        
        if (nombre && consola) {
            if (validateName(nombre)){
                const newGame = new Game({ nombre, consola, precio, genero,estreno, descripcion, imagen });
                await newGame.save();
                res.json({msj:"Game successfully added", id: newGame._id});
            } else {
                res.status(400).json({msg:"El nombre no tiene un formato valido",isOk: false});
            }
           
        } else {
            res.json({ isOk: false, msj: "Los datos son requeridos" })
        }

    } catch (error) {
        res.json(error)
    }
};

exports.update = async (req, res) => {

    try {
        const id = req.params.id;
        const game = await Game.findById(id);
    } catch (error) {
        res.json(error);
    }

};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const gameDeleted = await Game.findByIdAndDelete(id);
        if (gameDeleted != null){
            res.status(200).json({msj: "Juego borrado de forma satisfactoria",isOk:true});
        }
        res.status(404).json({msj: "La id ingresada no corresponde a ningun juego existente",isOk:false});
       
    } catch (error) {
        res.status(500).json(error);

    }



};

