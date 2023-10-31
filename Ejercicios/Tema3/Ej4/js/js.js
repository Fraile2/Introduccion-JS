let valores = [true, 5, false, "Hola", "adios", 2];

/*
    Parte 1: Determinar cual de los elementos de texto es mayor.
*/

if (valores[3]<valores[4]) {
    alert("El texto "+valores[4]+ " es mayor." );
} else if (valores[3]>valores[4]) {
    alert("El texto "+ valores[3]+ " es mayor.")
} else {
    alert("El texto "+ valores[3] +" y "+ valores[4] + " son iguales.")

}
/*
    Parte 2: Utilizando exclusivamente los dos valores booleanos del array
*/
alert(valores[0]);
alert(valores[2]);
/*
    Parte 3: Determinar el resultado de 5 operaciones matemáticas realizadas con los 2 elementos numéricos
*/

alert(valores[1]+" + "+valores[5]+" = "+(valores[1]+valores[5]));
alert(valores[1]+" - "+valores[5]+" = "+(valores[1]-valores[5]));
alert(valores[1]+" * "+valores[5]+" = "+(valores[1]*valores[5]));
alert(valores[1]+" / "+valores[5]+" = "+(valores[1]/valores[5]));
alert(valores[1]+" % "+valores[5]+" = "+(valores[1]%valores[5]));




