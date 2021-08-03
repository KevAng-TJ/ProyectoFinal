const express = require('express')
const router = express.Router()

const tramitescontroller = require('../controllers/tramiteController')

//Mostrar todos los trámites (GET)
router.get('/tramites', tramitescontroller.mostrar)

//Crear trámite (POST)
router.post('/creartramite', tramitescontroller.crear)

//Editar trámite (POST)
router.post('/editartramite', tramitescontroller.editar)

//Eliminar trámite (GET)
router.get('/eliminartramite/:id', tramitescontroller.borrar)

module.exports = router