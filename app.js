//1° - Invocamos a express
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

//2° - Seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//3° - Invacamos a dotenv
const dotenv = require('dotenv')
dotenv.config({path: './env/.env'})

//4° - Directorio public
app.use(express.static('public'))
app.use('/resources', express.static('public'))
app.use('/resources', express.static(__dirname + '/public'))
app.use('/docs', express.static(path.join(__dirname, 'docs')))

//5° - Establecemos el motor de plantillas ejs
app.set('view engine', 'ejs')

//8° - Módulo de conexión de la base de datos
const db = require('./database')

//9° - Estableciendo las rutas
app.get('/', (req, res) => {
    res.render('login') // {msg: 'Esto es un mensaje desde NodeJS'}
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/tramites', (req, res) => {
    res.render('tramites')
})

app.get('/layouts', (req, res) => {
    res.render('layouts')
})

const usuarios = require('./routes/usuarios')
app.use(usuarios)

const clientes = require('./routes/clientes')
app.use(clientes)

const tramites = require('./routes/tramites')
app.use(tramites)

const layouts = require('./routes/home-router')
app.use(layouts)

//app.get('/clientes', (req, res) => {
//   res.render('clientes')
//})

app.listen(3000, () => {
    console.log('¡¡Servidor Activado!! en http://localhost:3000')
})