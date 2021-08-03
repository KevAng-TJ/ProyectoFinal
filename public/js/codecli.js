const modalCliente = new bootstrap.Modal(document.getElementById('modalCliente'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditarCliente', e => {
    const fila = e.target.parentNode.parentNode
    idcliente_editar.value = fila.children[0].innerHTML
    nombrecliente_editar.value = fila.children[1].innerHTML
    apellidocliente_editar.value = fila.children[2].innerHTML
    dnicliente_editar.value = fila.children[3].innerHTML
    telefonocliente_editar.value = fila.children[4].innerHTML
    modalCliente.show()
})  