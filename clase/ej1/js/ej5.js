document.addEventListener("DOMContentLoaded", ej5);

function ej5(event) {
    for (let i = 1; i < 11; i++) {
        resultado1.innerHTML+=i+" ";
    }

    for (let i = 0; i < 20*2; i+=2) {
        resultado2.innerHTML+=i+" ";
    }

    for (let i = 0; i < 500; i+=7) {
        if (i%7==0) {
            resultado3.innerHTML+=i+" ";
        }
    }
}