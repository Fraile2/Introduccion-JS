document.addEventListener("DOMContentLoaded", carga)

function carga(event) {
    addObjeto.addEventListener("click", click_addObjeto);
    volver.addEventListener("click", click_addObjeto)
}

function click_addObjeto(event) {
    event.preventDefault();
    let formulario1=document.getElementById('formulario1').classList
    formulario1.toggle("oculto");
}