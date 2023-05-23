const mongoose = require('mongoose');

const conexionDB = async() => {
    try {
       const DB = await mongoose.connect('mongodb://127.0.0.1:27017/test-games',{useNewUrlParser:true,useUnifiedTopology:true});
       console.log("Conexion de forma satisfactoria", DB.connection.name)
    } catch (error) {
        console.log(error)
    }
}
module.exports = conexionDB;
