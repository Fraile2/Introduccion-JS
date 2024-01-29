document.addEventListener("DOMContentLoaded", carga);

function carga(event) {
    btnCambiar.onclick=function(event) {
        event.preventDefault();
        if (estilos.getAttribute('href')=="css/estilos1.css") {
            estilos.setAttribute('href', 'css/estilos2.css');
        } else {
            estilos.setAttribute('href', 'css/estilos1.css');
        }    
    };
}

function cambiarEstilos(event) {
    
}