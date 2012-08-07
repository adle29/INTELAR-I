
var xmove = 0;
var ymove = 0;
var talk = 0;
var mouthColor;
var time = 0;
var move = 0;
var centerX = canvas.width /2;
var centerY = canvas.height /2;
var color = ["rgba(255,0,0,0.6)","rgba(255,0,255,0.6)", "rgba(0,0,255,0.6)","rgba(0, 255, 255, 0.6)","rgba(0,255,0, 0.6)", "rgba(255,255,0, 0.8)" ];
//				rojo            *rosa                *azul fuerte        *  azul claro	        * verde                   * amarillo				
   
  
//CALL FUNCTIONS
setInterval(function(){
    init();
    //clearCanvas ();
    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    drawFace ( 'pink','red');  
   // drawMeter (mood);
    move = move +0.1;
     if (boolean) {
      time += 0.5;
      mouthColor = "rgba(0,255,0,1)";
	    }
	   else {
    	time = 0;
     mouthColor = 'rgba(0,255,0,0)';
     drawMouth ();
    }
    
       },30);
  
// FUNCTIONS 
 function init () {
 	xmove = Math.cos(move)*8;
    ymove = Math.sin(move)*3;
    
 }
 
 function drawMouth () {
 /*	if (boolean) {
		talk = Math.abs (Math.sin(move)*30);
	}
	else {
    	talk = 5;
    }
	   context.beginPath();
    context.rect(centerX+ xmove-50,centerY+50, 100, talk);
    context.fillStyle = "black";
    context.fill();
    context.lineWidth = 5; 
    context.strokeStyle = "white";
    context.stroke(); */
    var circ, ang, y3;
    if (mood < 3) {
     circ = 1.9 * Math.PI;
     ang = 1.1 * Math.PI;
     y3 = 80;
    }
    else {
     circ = Math.PI;
     ang = 0;
     y3 = 30;
    }
    context.beginPath();
    context.arc(centerX+ xmove,centerY+y3, 50, ang, circ, false);
    context.lineWidth = 2;
    context.fillStyle = "rgba(0,0,0,0);";
    context.strokeStyle = "green";
    context.stroke();
    context.fill();
}

    
function clearCanvas () {
    context.clearRect (0,0,canvas.width,canvas.height);
    }
    
function drawEyeBrows (x1, x2, y1,y2) {
    context.beginPath();
    context.moveTo(x1,y1+centerY+ymove);
    context.lineTo (x2,y2+centerY+ymove);
    context.lineWidth = 8;
    context.strokeStyle = "white";
    context.stroke();
    }
    
function drawCircle (x,y, radius, endingAngle , color, color2) {
        context.beginPath();
        context.arc (centerX+x, centerY+y,radius, 0,endingAngle);
        context.fillStyle = color;
        context.fill();
        context.lineWidth = 3 ;
        context.strokeStyle = color2;
        context.stroke();
        
    }
    
    
function drawMouth2 () {

  var i, plotX, plotY, screenX, screenY;
  var numSegments = 100;
  
  var plotXMin = 30;
  var plotXMax = 50;
  var plotYMin = -10;
  var plotYMax = 15;
  
  var screenXMin = centerX-50;
  var screenXMax = centerX+50;
  var screenYMin = centerY+275;
  var screenYMax = centerY-250;

  function transform(x, min1, max1, min2, max2){
  // normalizedX is between 0 and 1
  var normalizedX = (x - min1) / (max1 - min1);
  return normalizedX * (max2 - min2) + min2;
}

  function Mouth () {
    context.beginPath();
    for (i = 0; i < numSegments; i++) {
      plotX = transform(i, 0, numSegments, plotXMin, plotXMax);
      plotY = Math.sin(plotX+time)*Math.abs(Math.sin(time*num));
      screenX = transform(plotX, 
                          plotXMin, plotXMax, 
                          screenXMin, screenXMax);
      screenY = transform(plotY, 
                          plotYMin, plotYMax, 
                          screenYMin, screenYMax);
      if(i === 0){
        context.moveTo(screenX+xmove, screenY+ymove);   
      }
      else{
        context.lineTo(screenX+xmove, screenY+ymove);
      }
      context.lineWidth = 0.9;
      context.strokeStyle = mouthColor;
      context.stroke();
    }
  
}
  Mouth();
}
    
function drawFace (color1,color2) {
		if (mood > 5) {
			mood = 5;
		}  
		if (mood < 0) {
			mood = 0;
		}

      drawCircle (xmove, ymove , 123, 2*Math.PI, color[mood], 'rgba(132,112,255, 0.6)');

      drawCircle (xmove, ymove , 120, 2*Math.PI, "rgba(132,112,255, 0.3)", 'rgba(255, 255, 255, 0.6)');
      drawCircle (xmove, ymove , 118, 2*Math.PI, "rgba(0, 255, 255, 0.0)", 'rgba(132,112,255, 0.6)');

      //eyes
      drawCircle (-50+xmove,-20+ymove,35+ymove, 2*Math.PI ,'white', 'rgba(132,112,255, 0.6)');
      drawCircle (50+xmove,-20+ymove,35+ymove, 2*Math.PI ,'white', 'rgba(132,112,255, 0.6)	');
      
      //innerEyes
      drawCircle (-45+xmove,-20,20+ymove, 2*Math.PI ,'rgba(0,255,0,1)', 'rgba(132,112,255, 0.6)');
      drawCircle (45+xmove,-20,20+ymove, 2*Math.PI ,'rgba(0,255,0,1)', 'rgba(132,112,255, 0.6)');
      
      //innerInnerEyes
      drawCircle (-45+xmove,-20,5+ymove, 2*Math.PI ,'rgba(132,112,255, 0.6)', 'rgba(132,112,255, 0.6)');
      drawCircle (45+xmove,-20,5+ymove, 2*Math.PI ,'rgba(132,112,255, 0.6)', 'rgba(132,112,255, 0.6)');

     //drawMouth
     //drawMouth ();
     drawMouth2 ();
      
     //draw eye brows      
      drawEyeBrows(centerX-15+xmove, centerX-60+xmove,-70+ymove, -65);
      drawEyeBrows(centerX+20+xmove, centerX+65+xmove,-70+ymove, -65);
    }


