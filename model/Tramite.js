const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tramiteSchema = new Schema({
    tipo_tramite: String,
    descripcion: String,
    fecha: String,
    precio: Number,
    cliente: String
}, {versionKey: false})

module.exports = mongoose.model('tramites', tramiteSchema)