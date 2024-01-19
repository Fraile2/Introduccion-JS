document.addEventListener("DOMContentLoaded", carga);

function carga(event) {
    formulario.addEventListener('submit', show_nombre);
}

function show_nombre(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    resultado.innerHTML="Tu nombre es: "+nombre;
}