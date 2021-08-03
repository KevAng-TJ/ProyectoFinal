const Usuario = require('../model/Usuario')
//Mostrar
module.exports.mostrar = (req, res) => {
    Usuario.find({}, (error, usuarios) => {
        if(error){
            return res.status(500).json({
                message: 'Error al mostrar listas de usuarios'
            })
        }
        return res.render('usuarios', {usuarios: usuarios})
    })
}

//Crear [console.log(req.body)]
module.exports.crear = (req, res) => {
    const usuario = new Usuario({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        usuario: req.body.usuario,
        contraseña: req.body.contraseña,
        dni: req.body.dni,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    })
    usuario.save(function(error,usuario){
        if(error){
            return res.status(500).json({
                message: 'Error al resgistrar nuevo usuario'
            })
        }res.redirect('/usuarios')
    })
}

//Editar
module.exports.editar = (req, res) => {
    const id = req.body.id_editar
    const nombres = req.body.nombres_editar
    const apellidos = req.body.apellidos_editar
    const usuario = req.body.usuario_editar
    const contraseña = req.body.contraseña_editar
    const dni = req.body.dni_editar
    const email = req.body.email_editar
    const telefono = req.body.telefono_editar
    const direccion = req.body.direccion_editar
    Usuario.findByIdAndUpdate(id, {nombres, apellidos, usuario, contraseña, dni, email, telefono, direccion}, (error, usuario) => {
        if(error){
            return res.status(500).json({
                message: 'Error al editar los datos del usuario'
            })
        }
        res.redirect('/usuarios')
    })
}

//Eliminar
module.exports.eliminar = (req, res) => {
    const id = req.params.id
    Usuario.findByIdAndRemove(id, (error, usuario) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar usuario'
            })
        }
        res.redirect('/usuarios')
    })
}