const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = new Schema ({
    Nombres: String,
    Apellidos: String,
    DNI: Number,
    Telefono: Number
}, {versionKey: false})

module.exports = mongoose.model('clientes', clienteSchema)