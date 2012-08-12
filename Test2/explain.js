var canvas = document.getElementById('canvas2');
var context = canvas.getContext('2d');

context.beginPath();
context.fillStyle = "rgba(0,255,255,0.6)";
context.fillRect(0,0,canvas.width,canvas.height);
context.fill();

context.font="20px Verdana";
// Create gradient
var gradient=context.createLinearGradient(0,0,canvas.width,0);
gradient.addColorStop("0","yellow");
gradient.addColorStop("0.5","white");
gradient.addColorStop("1.0","yellow");
// Fill with gradient
context.fillStyle=gradient;
context.fillText("How does Intelar works ?",10,50);

