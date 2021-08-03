const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')

//Mostrar todos los clientes (GET)
router.get('/clientes', clienteController.mostrar)

//Crear nuevo cliente (POST)
router.post('/crearcliente', clienteController.crear)

//Editar cliente (POST)
router.post('/editarcliente', clienteController.editar)

//Borrar cliente (GET)
router.get('/eliminarcliente/:id', clienteController.borrar)

module.exports = router