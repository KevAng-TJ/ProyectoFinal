const modalTramite = new bootstrap.Modal(document.getElementById('modalTramite'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditarTramite', e => {
    const fila = e.target.parentNode.parentNode
    idtramite_editar.value = fila.children[0].innerHTML
    tipo_tramite_editar.value = fila.children[1].innerHTML
    descripción_editar.value = fila.children[2].innerHTML
    fecha_editar.value = fila.children[3].innerHTML
    precio_editar.value = fila.children[4].innerHTML
    cliente_editar.value = fila.children[5].innerHTML
    modalTramite.show()
})