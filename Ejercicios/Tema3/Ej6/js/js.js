let RESTOS=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
let dni="02759617";
let dni_resto=parseInt(dni)%RESTOS.length();
for (const r of RESTOS) {
    if (dni_resto==RESTOS.indexOf(RESTOS[r])) {
        alert("La letra DNI "+dni+" tiene la letra.");
    }
}
