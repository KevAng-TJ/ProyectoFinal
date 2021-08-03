const Tramite = require('../model/Tramite')

//Mostrar
module.exports.mostrar = (req, res) => {
    Tramite.find({}, (error, tramites) => {
        if(error){
            return res.status(500).json({
                message: 'Error al mostrar lista de trámites'
            })
        }
        return res.render('tramites', {tramites: tramites})
    })
}

//Crear
module.exports.crear = (req, res) => {
    const tramite = new Tramite({
        tipo_tramite: req.body.tipo_tramite,
        descripcion: req.body.descripción,
        fecha: req.body.fecha,
        precio: req.body.precio,
        cliente: req.body.cliente
    })
    tramite.save(function(error, tramite){
        if(error){
            return res.status(500).json({
                message: 'Error al crear trámite'
            })
        }
        res.redirect('/tramites')
    })
}

//Editar
module.exports.editar = (req, res) => {
    const id = req.body.idtramite_editar
    const tipo_tramite = req.body.tipo_tramite_editar
    const descripcion = req.body.descripción_editar
    const fecha = req.body.fecha_editar
    const precio = req.body.precio_editar
    const cliente = req.body.cliente_editar
    Tramite.findByIdAndUpdate(id, {tipo_tramite, descripcion, fecha, precio, cliente}, (error, tramite) => {
        if(error){
            return res.status(500).json({
                message: 'Error al editar los datos del trámite'
            })
        }
        res.redirect('/tramites')
    })
}

//Borrar
module.exports.borrar = (req, res) => {
    const id = req.params.id
    Tramite.findByIdAndRemove(id, (error, tramite) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar trámite'
            })
        }
        res.redirect('/tramites')
    })
}