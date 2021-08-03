const Cliente = require('../model/Cliente')

//Mostrar
module.exports.mostrar = (req, res) => {
    Cliente.find({}, (error, clientes) => {
        if(error) {
            return res.status(500).json({
                message: 'Error al mostrar lista de clientes'
            })
        }
        return res.render('clientes', {clientes: clientes})
    })
}

//Crear
module.exports.crear = (req, res) => {
    const cliente = new Cliente({
        Nombres: req.body.nombres,
        Apellidos: req.body.apellidos,
        DNI: req.body.dni,
        Telefono: req.body.telefono
    })
    cliente.save(function(error, cliente){
        if(error){
            return res.status(500).json({
                message: 'Error al crear nuevo cliente'
            })
        }
        res.redirect('/clientes')
    })
}

//Editar
module.exports.editar = (req, res) => {
    const id = req.body.idcliente_editar
    const nombres = req.body.nombrecliente_editar
    const apellidos = req.body.apellidocliente_editar
    const dni = req.body.dnicliente_editar
    const telefono = req.body.telefonocliente_editar
    Cliente.findByIdAndUpdate(id, {nombres, apellidos, dni, telefono}, (error, cliente) => {
        if(error){
            return res.status(500).json({
                message: 'Error al editar los datos del usuario'
            })
        }
        res.redirect('/clientes')
    })
}

//Borrar
module.exports.borrar = (req, res) => {
    const id = req.params.id
    Cliente.findByIdAndRemove(id, (error, cliente) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar cliente'
            })
        }
        res.redirect('/clientes')
    })
}