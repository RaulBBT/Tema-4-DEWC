document.write("<img id='imagen' src='descarga.jpg' onclick='mover()'>");
function mover(){
	var x=event.clientX;
	var y=event.clientY;
	var imagen = document.getElementById('imagen');
	imagen.style.backgroundPosition=y;
}