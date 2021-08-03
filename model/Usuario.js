const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nombres: String,
    apellidos: String,
    usuario: String,
    contraseña: String,
    dni: Number,
    email: String,
    telefono: Number,
    direccion: String
}, {versionKey: false})

module.exports = mongoose.model('usuarios', usuarioSchema)