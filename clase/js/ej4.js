document.addEventListener("DOMContentLoaded", carga);

function carga(event) {
    ej4();
}

function ej4(event) {
    var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    for (let i = 0; i < dias.length; i++) {
        resultado.innerHTML+=dias[i]+"<br/>";
    }

}