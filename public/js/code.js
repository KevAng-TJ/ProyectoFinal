const modalUsuario = new bootstrap.Modal(document.getElementById('modalUsuario'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombres_editar.value = fila.children[1].innerHTML
    apellidos_editar.value = fila.children[2].innerHTML
    usuario_editar.value = fila.children[3].innerHTML
    contraseña_editar.value = fila.children[4].innerHTML
    dni_editar.value = fila.children[5].innerHTML
    email_editar.value = fila.children[6].innerHTML
    telefono_editar.value = fila.children[7].innerHTML
    direccion_editar.value = fila.children[8].innerHTML
    modalUsuario.show()
})