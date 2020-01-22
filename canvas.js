function doFirst () {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	window.addEventListener("mousemove",dante,false);
	//the mouse moves after the page loads and it moves inside the canvas.
	// one can center the mouse by adding -50 on both x and y
	// we use the clearRect method because if we dont it will keep drawing a dark shadow as we move the mouse
}
function dante(e){
	canvas.clearRect(0,0,600,400);
	var xPos = e.clientX;
	var yPos = e.clientY;
	canvas.fillRect(xPos-50,yPos-50,100,100);
}
window.addEventListener("load",doFirst ,false);