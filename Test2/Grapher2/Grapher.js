//Utilities
function transform(x, min1, max1, min2, max2){
  // normalizedX is between 0 and 1
  var normalizedX = (x - min1) / (max1 - min1);
  return normalizedX * (max2 - min2) + min2;
}


//Controller

//Main App

(function animate () {
   
  requestAnimFrame (animate);
  model.time += 0.05;
  view.drawPlot();
    
})();

function plotButtonClicked(text){  
   model.setEquation(text);
}

function clearCanvas () {
	c.clearRect(0,0,canvas.width,canvas.height);
}

