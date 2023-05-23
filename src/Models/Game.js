const { Schema,model } = require("mongoose");

const GameSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    consola: {
        type: String,
        required: true
    },
    precio: Number,
    genero: [String],
    estreno: Date,
    descripcion: String,
    imagen: String
    
});

module.exports = model("Game",GameSchema);
