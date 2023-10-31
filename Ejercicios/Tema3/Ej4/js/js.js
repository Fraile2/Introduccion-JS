let valores = [true, 5, false, "Hola", "adios", 2];

if (valores[3]<valores[4]) {
    alert("El texto "+valores[4]+ " es mayor." );
} else if (valores[3]>valores[4]) {
    alert("El texto "+ valores[3]+ " es mayor.")
} else {
    alert("El texto "+ valores[3] +" y "+ valores[4] + " son iguales.")

}

if (valores[0]) {
    alert("El valor contrario a "+ valores[0] +" es: "+ !valores[0])
} else {
    alert("El valor contrario a "+ valores[1] +" es: "+ !valores[1])
}