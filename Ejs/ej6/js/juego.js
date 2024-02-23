document.addEventListener("DOMContentLoaded", iniciar);

let azar=0;
let intentos=0

function iniciar() {
	let intentos=0;
	azar=generar_aleatorio();
}

function jugar(){
	let esta_bien=0;
	if (intentos==0) {
		azar=0;
		esta_bien=comprobar_numero(num.value, azar);
	} else if (intentos<10 && intentos>=1){
		esta_bien=comprobar_numero(num.value, azar);
	} else {
		alert("El numero era: "+azar);
		this.reset();
	}


}

function generar_aleatorio() {
	return Math.floor(Math.random()*100);
}

function comprobar_numero(numero, azar) {
	let comprobar=0;
	if (numero<azar) {
		comprobar=1; // es menor
		intentos++;
		informacion.value+=numero.value.toString();
	} else if(numero>azar) {
		comprobar=2; // es mayor
		intentos++;
		informacion.value+=numero.value.toString();
	} else {
		comprobar=0; // es igual
		let visores=document.getElementsByTagName('td');
		visores[0].style.backgroundColor="green";
	}
	return comprobar;
}
