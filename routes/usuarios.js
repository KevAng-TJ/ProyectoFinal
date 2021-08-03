const express = require('express')
const router = express.Router()

const usuarioController = require('../controllers/usuarioController')

//Mostrar todos los usuarios (GET)
router.get('/usuarios', usuarioController.mostrar) //cambiar a usuarios

//Crear usuario (POST)
router.post('/crearusuario', usuarioController.crear) 

//Editar usuario (POST)
router.post('/editarusuario', usuarioController.editar)

//Eliminar usuario(GET)
router.get('/eliminarusuario/:id', usuarioController.eliminar)

module.exports = router