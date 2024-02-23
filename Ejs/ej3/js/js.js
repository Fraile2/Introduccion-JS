function mostrarDatos(event) {
	let cadena="Nombre: "+nombre.value+
	".\nApellidos: "+apellidos.value+
	".\nEULA: "+eula.checked+
	".\nSeleccionado: ";

	if (seleccion.value==0) {
		cadena+="No seleccionado.";
	} else if(seleccion.value==1) {
		cadena+="Opcion 1";
	} else if(seleccion.value==2) {
		cadena+="Opcion 2";
	} else if(seleccion.value==3) {
		cadena+="Opcion 3";
	} else {
		cadena+="Opcion 4";
	}

	alert(cadena);
}