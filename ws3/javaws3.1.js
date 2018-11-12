function comprobarNombre(){
	var re1 = new RegExp("[0-9]");
	var name = document.getElementById("nombre").value;
	if (re1.test("in "+name+"")==true){
		document.getElementById("nombre").style.borderColor="red";
	}else{
		document.getElementById("nombre").style.borderColor="green";
	}
}
function comprobarApellidos(){
	var re1 = new RegExp("[a-zA-Z] [a-zA-Z]");
	var apellidos = document.getElementById("apellidos").value;
	if (re1.test(apellidos)){
		document.getElementById("apellidos").style.borderColor="green";
	}else{
		document.getElementById("apellidos").style.borderColor="red";
	}
}
function comprobarDNI(){
	var re1 = new RegExp("\d{8}[-]?[A-Z]{1}");
	var dni = document.getElementById("dni").value;
	if (re1.test(dni)){
		document.getElementById("dni").style.borderColor="green";
	}else{
		document.getElementById("dni").style.borderColor="red";
	}
}