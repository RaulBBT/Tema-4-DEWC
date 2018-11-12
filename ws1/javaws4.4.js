function dibujarTabla(){
	document.write("<table width=800px; height=800px;>");
	var z=0;
	for (var i=0;i<=50;i++){
		document.write("<tr>");
		for (j=0;j<=50;j++){
			document.write("<td id='"+(z)+"'onMouseMove ='pintar(id)'>  ");
			document.write("</td>");
			z++;
		}
		document.write("</tr>");
	}
	document.write("</table>");
	document.write("<button type='button' onclick='limpiar()'>Limpiar</button>");
}
function pintar(id){
	if(event.shiftKey==true){
		var caja=document.getElementById(id);
		caja.style.backgroundColor = "blue";
	}
	if (event.ctrlKey==true){
		var caja=document.getElementById(id);
		caja.style.backgroundColor = "red";
	}
	if (event.altKey==true){
		var caja=document.getElementById(id);
		caja.style.backgroundColor = "white";
	}
}
function limpiar(){
	for (var x=2500;x>=0;x--){
		var caja=document.getElementById(""+x);
		caja.style.backgroundColor = "white";
	}
}