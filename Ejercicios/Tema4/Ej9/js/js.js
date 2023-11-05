es_mayusculas_o_minusculas("hola mundo");

function es_mayusculas_o_minusculas(cadena) {
    if (cadena==cadena.toLowerCase()) {
        console.log("Esta cadena esta en minúsculas");
    } else if (cadena==cadena.toUpperCase()) {
        console.log("Esta cadena esta en mayusculas");
    } else {
        console.log("No se pudo determinar si la cadena está en mayusculas o minusculas");
    }
}