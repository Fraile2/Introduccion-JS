function validar(event) {
    let todo_correcto=true;

    // Soy yo: Alejandro Fraile del Olmo
    if ((nombre.value=="" || nombre.value.length<2) && (direccion.value=="" || (direccion.value).length<10)) {
        todo_correcto=false;
    }
    if (parseInt(edad.value)<18) {
        todo_correcto=false;
    }
    if (passw1.value==passw2.value && (passw1.value).length<=8) {
        todo_correcto=false;
    }
    if (!acepto.checked) { // ! -> distinto
        todo_correcto=false;
    }

    if (todo_correcto==false) {
        error.style.display="block";
    }
    return todo_correcto;
}