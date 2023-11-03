function par_o_impar(numero) {
    if (numero%2==0) {
        return "El numero "+numero+" es par.";
    } else { 
        return "El numero "+numero+" es impar.";
    }
}

alert(par_o_impar(121));