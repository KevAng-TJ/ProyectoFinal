const express = require('express')
const {homeview, generatePdf} = require('../controllers/homeController')

const router = express.Router()

router.get('/home', homeview)
router.get('/download', generatePdf)

module.exports = router