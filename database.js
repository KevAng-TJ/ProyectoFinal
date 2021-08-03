const moongose = require('mongoose')
const url = 'mongodb://localhost/municipalidad'

moongose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = moongose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback(){
    console.log("¡Conectado a MongoDB!")
})

module.exports = db