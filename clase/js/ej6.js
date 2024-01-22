document.addEventListener("DOMContentLoaded", carga);

function carga(event) {
    ej6();
}

function ej6(event) {
    var numero = prompt("Escribe un numero:");
    if (numero.length > 0 && +(numero)==numero) {
        if (numero%2==0) {
            resultado.innerHTML="El numero "+numero+" es par.";
        } else {
            resultado.innerHTML="El numero "+numero+" es impar.";
        }
    }
    
}