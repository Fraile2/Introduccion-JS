document.addEventListener("DOMContentLoaded", ej3);

function ej3(event) {
    var numero1=7;
    var numero2=9;

    if(numero1<numero2){
        resultado.innerHTML=numero2+" es mayor que "+numero1+". ";
    } else if (numero1>numero2){
        resultado.innerHTML=numero1+" es mayor que "+numero2+". ";
    } else if (numero1==numero2) {
        resultado.innerHTML="Son iguales . ";
    }
    var num1=numero1+1;
    if (num1<numero2) {
        resultado.innerHTML+="<br/>Ademas, el número "+ numero1+" + 1 sigue siendo menor que "+numero2;
    }
}