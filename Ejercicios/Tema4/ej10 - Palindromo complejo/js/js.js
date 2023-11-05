var palindromo="La ruta nos aporto otro paso natural";
es_un_palindromo(palindromo);


function es_un_palindromo(cadena) {
    let cadena2=cadena.toLowerCase().split(" ").join();
    cadena=cadena.toLowerCase().split(" ").reverse().join();
    if (cadena2==cadena2) {
        alert("SI es un palindromo complejo.");
    } else {
        alert("NO es un palindromo complejo.");
    }
}