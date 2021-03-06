//View 
var view = (function(){
    
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var screenXMin = 0;
var screenXMax = canvas.width;
var screenYMin = canvas.height;
var screenYMax = 0;

function drawPlot () {

  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.strokeStyle = "black";
  c.lineWidth = 1;
  c.strokeRect(0, 0, canvas.width, canvas.height);
  
  
 // c.stroke();
  // Draw the X axis
  var xAxisYPixelCoordinate = transform(0, model.plotYMin, model.plotYMax, screenYMin, screenYMax);
  c.beginPath();
  c.moveTo(0, xAxisYPixelCoordinate);
  c.lineTo(canvas.width, xAxisYPixelCoordinate);
  c.strokeStyle = "black";
  c.stroke();
  
  // Draw the Y axis
  var yAxisXPixelCoordinate = transform(0, model.plotXMin, model.plotXMax, screenXMin, screenXMax);
  c.beginPath();
  c.moveTo(yAxisXPixelCoordinate, 0);
  c.lineTo(yAxisXPixelCoordinate, canvas.height);
  c.strokeStyle = "black";
  c.stroke();
  
  
  // Draw the function
  var i, plotX, plotY, screenX, screenY;
  var c1 = 0;
  var color = ["red","blue", "green", "yellow"];
  c.beginPath();
  for(i = 0; i <= model.numSegments; i++){
    plotX = transform(i, 0, model.numSegments, model.plotXMin, model.plotXMax);
    plotY = model.executeEquation (plotX);
    screenX = transform(plotX, 
                        model.plotXMin, model.plotXMax, 
                        screenXMin, screenXMax);
    screenY = transform(plotY, 
                        model.plotYMin, model.plotYMax, 
                        screenYMin, screenYMax);
    if(i === 0){
      c.moveTo(screenX, screenY);         
    }
    else{
      c.lineTo(screenX, screenY);     
    }
    
    c.strokeStyle = color[c1];
      c.stroke();
      
  }
  
}

    return { drawPlot: drawPlot};
    


})();