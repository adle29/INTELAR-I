var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var executeFrame;

//CALL FUNCTIONS
setInterval(function(){
  if(executeFrame)
    executeFrame();
},30);

function faces () {
    // VARIABLES
     

    var centerX = canvas.width/2;
    var centerY = canvas.height/2;
    var xmove = 0;
    var ymove = 0;
    var grad = context.createLinearGradient (200, 30, 370, 400);
   
     // FUNCTIONS 
     function gradient (color1,color2) {
           grad.addColorStop(0.4,color1);
           grad.addColorStop (0.7,color2);
           context.fillStyle =grad;
           context.fill();
     }
     
     function clearCanvas () {
         context.clearRect (0,0,canvas.width,canvas.height);
     }
     
     function drawEyeBrows (x1, x2, y1,y2) {
         context.beginPath();
         context.moveTo(x1,y1);
         context.lineTo (x2,y2);
         context.strokeStyle = "black";
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
     
     function drawFace (x,y,color1,color2) {
       gradient(color1,color2);
       drawCircle (xmove+x,ymove , 70, 2*Math.PI,grad, 'black');
       //eyes
       drawCircle (-15+xmove + x,-10+ymove,10+ymove, 2*Math.PI ,'white', 'black');
       drawCircle (20+xmove + x,-10+ymove,10+ymove, 2*Math.PI ,'white', 'black');
       //innerEyes
       drawCircle (-15+xmove + x,-10,5+ymove, 2*Math.PI ,'#00FFFF', 'blue');
       drawCircle (20+xmove + x,-10,5+ymove, 2*Math.PI ,'#00FFFF', 'blue');
       
       drawCircle (0+xmove + x, 10, 40+ymove, Math.PI,grad, 'black');
       
       drawEyeBrows(175+xmove +x, 200+xmove+x, 170+ymove, 180);
       drawEyeBrows(230+xmove +x, 210+xmove+x, 170+ymove, 180);
     }
     
     var move = 0;
     
     var executeFrameForFace = function(){
       xmove = Math.cos(move)*8;
       ymove = Math.sin(move)*3;
       clearCanvas ();
       drawFace (0,0, 'pink','red');  
       drawFace (140,0,'pink','red');
       drawFace (-140,0,'pink','red');
       move = move +0.1;
     }      
     
     executeFrame = executeFrameForFace;
}

function pendulums () {

   var centerX = canvas.width/2;
   var centerY = canvas.height/6;
   var ballx = centerX;
   var bally = 30;
   var ballRadius = 10;
   var millisecondsBetweenFrames = 20;
   var time = 0;
   var grad = context.createRadialGradient (230, 0, 370, 200,50,34);
   
   function gradiente (one,two) {
       grad.addColorStop(one,"pink");
       grad.addColorStop(two,"red");
       context.fillStyle = grad;
       context.fill();
   }
       
   function drawBall (movement, height) {
      
       ballx = centerX + Math.sin(time*movement)*50;
       bally = centerY + Math.sin(time*movement)*50;
       context.beginPath();
       context.arc(ballx, bally+height, ballRadius, 0, 2*Math.PI);
       context.fillStyle = grad;
       context.fill();
       context.lineWidth = 2;
       context.strokeStyle = "black";
       context.stroke();
     
   }
   
   function ballDrawer (numberOfBalls) {
     for (var i = 0; i < numberOfBalls; i++) {
         drawBall(1 + i * 0.1, i*28);
     }
   }
   
   function executeFrameForBalls () {
     //CLEAR CANVAS
     context.clearRect (0,0,canvas.width,canvas.height);
     //draw ball
     gradiente(0.5,1);
     ballDrawer(10);
     //update ball position
     
     time = time +0.05;
   
   
   }
     
   executeFrame = executeFrameForBalls;
 
}

function colors () {

 var time = 0;
 var numCircles = 70;
 var centerX = canvas.width/2;
 var centerY = canvas.height/2;
 
 
 function drawCircles () {
  
   for (var i = 0; i < numCircles; i++) {
       var x = Math.sin(time*i/10)*200+centerX;
       var y = Math.sin(time*i/9)*200+centerX;
     
       var r = (Math.sin(time+i*0.1)/3 +0.5)*225;
       var b = (Math.tan(time+i)/6 +0.5)*225;
       var g = (i/(numCircles-1))*225;
     
       b = Math.round(b);
       r = Math.round(r);
       g = Math.round(g);
     
       var radius = (Math.sin(time +i) / 2 + 0.5) *2;
       context.beginPath();
       context.arc (x, y, radius, 0, 2 * Math.PI);
       //context.fillStyle = 'rgb('+((i/(numCircles-1))*225)+',0,0)';
       context.fillStyle = 'rgb('+r+','+b+','+g+')';
       context.fill();
   }
 
 }
 
 
 var executeFrameForColors = function(){
       drawCircles();
       time += 0.05;
     }      
     
     executeFrame = executeFrameForColors;
 

  
}

function orbitModel () {
 
  // Orbit Model by Abraham Adberstein 7/13/2012

  var r = 0;
  var b = 0;
  var g = 0;
  
  var time = 0;

  function drawCircle (x,y,radius) {
        
        context.beginPath();
        context.arc (x, y, radius, 0, 2 * Math.PI);
        context.fillStyle = 'rgb('+r+','+b+','+g+')';
        context.fill();
  }
  
  function drawCircles (PlanetInput) {
        var centerX = canvas.width/2;
        var centerY = canvas.height/2;
        var planetX = centerX;
        var planetY = centerY;
        var diference = 90;
        var planetRadius = 30;  
        
    
        drawCircle (centerX, centerY,planetRadius);
        planetRadius = 8;    
        for (var i = 1; i < PlanetInput+1; i++){
          r = (i/(PlanetInput-1))*225;
          b = (Math.sin(time) / 2 + 0.5)*225;
          g = (Math.sin(time*1.3) / 2 + 0.5)*255;
          
          b = Math.round(b);
          r = Math.round(r);
          g = Math.round(g);
      
           planetX += diference * Math.cos(time*i)/i;
           planetY += diference * Math.sin(time*i)/i;
           drawCircle ( planetX, planetY ,planetRadius);
           planetRadius = planetRadius / 2; 
    }
     
      
    
      
  }
  
  var executeFrameForOrbitModel = function(){
       context.clearRect(0,0, canvas.width, canvas.height);
        drawCircles (100);
        time += 0.05;
     }      
     
     executeFrame = executeFrameForOrbitModel;
}
    
function bouncingBall () {
   //BouncingBall by Abraham Adberstein and Mariam ? July/17,2012
  var canvas = document.getElementById ("canvas");
  var c = canvas.getContext("2d");
  
  //c.fillRect(0, 0, canvas.width, canvas.height);
  
  var ballX=100;
  var ballY=100;
  var ballRadius = 20;
  var ballYVelocity = 0;
  var ballXVelocity = 0;
  var gravityForce = 0.5;
  var frictionFactor = 0.99;
  var mouseDown = false;
  var mouseX = 0;
  var mouseY = 0;
  
  canvas.addEventListener("mousemove", function (e){
    mouseX = e.x-50;
    mouseY = e.y-150;
  });
  
  canvas.addEventListener("mousedown", function (e){
   mouseDown = true;
    
    
  });
  
  canvas.addEventListener('mouseout', function(e){
    mouseDown = false;
  });
  
  canvas.addEventListener("mouseup", function (e){
   mouseDown = false;
    
  });
  
  var executeFrameForBouncingBall = function(){
        simulatePhysics();
        c.clearRect (0, 0, canvas.width, canvas.height);   
        c.fillStyle = 'CCFDFF';
        c.fillRect(0,0,canvas.width,canvas.height);
        drawBall();
     }      
     
     executeFrame = executeFrameForBouncingBall;
  
  
  function simulatePhysics(){
    //Pull toward mouse
    if (mouseDown) {
      var ballMouseDistanceY = mouseY-ballY;
      var ballMouseDistanceX = mouseX-ballX;
      var pullForce = ballMouseDistanceY*0.01;
      var pullForceX = ballMouseDistanceX*0.01;
      ballYVelocity += pullForce;
      ballXVelocity += pullForceX;
      
    }
    
    //Add gravity to velocit
    ballYVelocity += gravityForce;
    
    //Move the ball by its velocity
    ballY += ballYVelocity;
    ballX += ballXVelocity;
    
    // Add friction
    ballYVelocity = ballYVelocity * frictionFactor;
    ballXVelocity = ballXVelocity * frictionFactor;
    
    //Make the ball bounce roof / bottom
    if (ballY > canvas.height - ballRadius ){
      ballY = canvas.height - ballRadius;
      ballYVelocity = -Math.abs(ballYVelocity);
    }
    
    if (ballX > canvas.width-ballRadius) {
      ballX = canvas.width - ballRadius;
      ballXVelocity = -Math.abs(ballXVelocity);
    }
    //Wall 
    if (ballX < ballRadius) {
      ballX = ballRadius;
      ballXVelocity = Math.abs(ballXVelocity);
    }
    if (ballY < ballRadius) {
      ballY = ballRadius;
      ballYVelocity = Math.abs(ballYVelocity);
    }
    
    
  }
  
  function drawBall () {
    
      c.beginPath();
      c.arc (ballX, ballY, ballRadius, 0, 2*Math.PI);
      c.fillStyle = "FF0F5F"; 
    
    if (mouseDown){  
      c.moveTo(mouseX, mouseY);
      c.lineTo(ballX, ballY);
      c.stroke();
    }
    else {
      c.fillStyle = "green";
      
    }
    
  c.fill();
    
  }
  
   
 
}

function multipleBalls () {
  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  var gravity = 0.1;
  var radius = 5;
  var numCircles = 10;
  var dampeningFactor = 0.99;
  var mouse ={
    x: 0,
    y: 0,
    down:false
  };
  var circleUnderMouse;
  
  var circles = [];
  var i, j, circle, circle2;
  
  initializeCircles();
  
   var executeFrameForMultipleBalls = function(){
        c.clearRect(0,0,canvas.width,canvas.height);
        drawCircles();
        iterateSimulation();
     }      
     
     executeFrame = executeFrameForMultipleBalls;
  
  function initializeCircles(){
    for(i = 0; i < numCircles; i++){
      circle = {
        x: Math.random() * canvas.width, 
        y: Math.random() * canvas.height,
        velocity:{x:0, y:0}
      };
      circles.push(circle);
    }
  }
  
  function drawCircles(){
      for(i = 0; i < numCircles; i++){
        circle = circles[i];
        c.beginPath();
        c.arc(circle.x, circle.y, radius, 0, 2 * Math.PI);
        if (circle == circleUnderMouse){
          c.fillStyle = "green";
          c.fill();
          }
        else {
          c.fillStyle = "red";
          c.fill();
        }
        if (mouse.down == true)
          c.moveTo(mouse.x, mouse.y);
          c.lineTo(circle.x, circle.y);
          c.stroke();
      }
    }
  
  function iterateSimulation(){
    for(i = 0; i < numCircles; i++){
      circle = circles[i];
        
     // Add gravity
      circle.velocity.y += gravity;
      
      // Slow things down
      circle.velocity.x *= dampeningFactor;
      circle.velocity.y *= dampeningFactor;
      
      // same as 
      // circle.velocity.x = circle.velocity.x * dampeningFactor;
      
      
      // Add velocity to position
      circle.x += circle.velocity.x;
      circle.y += circle.velocity.y;
      
      if (mouse.down == true) {
      var ballMouseDistanceY = mouse.y-circle.y;
      var ballMouseDistanceX = mouse.x-circle.x;
      var pullForce = ballMouseDistanceY*0.01;
      var pullForceX = ballMouseDistanceX*0.01;
      circle.velocity.y += pullForce;
      circle.velocity.x += pullForceX;
      
    }
         
      // Make them bounce off the floor
      if(circle.y > canvas.height - radius){
        circle.y = canvas.height - radius;
        circle.velocity.y = -Math.abs(circle.velocity.y);
      }
      // Make them bounce off the cieling
      if(circle.y < radius){
        circle.y = radius;
        circle.velocity.y = Math.abs(circle.velocity.y);
      }
      // Make them bounce off the right wall
      if(circle.x > canvas.width - radius){
        circle.x = canvas.width - radius;
        circle.velocity.x = - Math.abs(circle.velocity.x);
      }
      // Make them bounce off the left wall
      if(circle.x < radius){
        circle.x = radius;
        circle.velocity.x = Math.abs(circle.velocity.x);
      }
      
      // Repulsion between all pairs of circles
      for(j = i + 1; j < numCircles; j++){
        circle2 = circles[j];
        var dx = circle2.x - circle.x;
        var dy = circle2.y - circle.y;
        var d = Math.sqrt(dx*dx + dy*dy);
        if(d < radius * 2){
          if(d == 0)
            d = 0.1;
          
          var unitX = dx/d;
          var unitY = dy/d;
          
          var force = - 2;
          
          var forceX = unitX * force;
          var forceY = unitY * force;
          
          circle.velocity.x += forceX;
          circle.velocity.y += forceY;
          
          circle2.velocity.x -= forceX;
          circle2.velocity.y -= forceY;
        }
      }
    }
  }
  
  canvas.addEventListener ('mousemove', function (e){
    mouse.x = e.x - 40;
    mouse.y = e.y - 150;
  });
  
  
  
  canvas.addEventListener ('mousedown', function (e){
    var i;
    mouse.down = true;
    mouse.x = e.x - 40;
    mouse.y = e.y- 150;
    for (i = 0; i < circles.length; i++) {
      var circle = circles[i];
      var dx = mouse.x - circle.x;
      var dy = mouse.y - circle.y;
      var d = Math.sqrt (dx*dx+dy*dy);
      
      if (d < radius) {
        console.log(d);
        circleUnderMouse = circle;
        break;
      }
      
      
    }
  });
  
  canvas.addEventListener ('mouseup', function (e){
    mouse.down = false;
  });
  
  canvas.addEventListener ('mouseout', function (e){
    mouse.down = false;
  });
 
}

function drawingColors () {
   //Super Colors by Abraham Adberstein 7/12/2012
  
  var canvas = document.getElementById ("canvas");
  var context = canvas.getContext ("2d");
  var time = 0;
  var numCircles = 70;
  var centerX = canvas.width/2;
  var centerY = canvas.height/2;


function drawCircles (x1,y1) {
 
   for (var i = 0; i < numCircles; i++) {
       var x = Math.sin(time*i/10)*200+x1;
       var y = Math.sin(time*i/9)*200+y1;
     
       var r = (Math.sin(time+i*0.1)/3 +0.5)*225;
       var b = (Math.tan(time+i)/6 +0.5)*225;
       var g = (i/(numCircles-1))*225;
     
       b = Math.round(b);
       r = Math.round(r);
       g = Math.round(g);
     
       var radius = (Math.sin(time * i) / 2 + 0.5) *5+5;
       context.beginPath();
       context.arc (x, y, radius, 0, 2 * Math.PI);
       //context.fillStyle = 'rgb('+((i/(numCircles-1))*225)+',0,0)';
       context.fillStyle = 'rgb('+r+','+b+','+g+')';
       context.fill();
   }
 
 }
 
 function executeFrameForDrawing () {
     canvas.onmousemove = function (event) {
       var eve = event.x;
       var eve2 = event.y;
       drawCircles(eve,eve2);
   };
       time += 0.05;  
   }
     
   executeFrame = executeFrameForDrawing;
 

 
}

function sierpinski () {
   var canvas = document.getElementById("canvas");
   var c = canvas.getContext("2d");
   
   var centerX = canvas.width /2;
   
   var x1 = centerX;
   var y1 = 0;
   var x2 = canvas.width;
   var y2 = canvas.height;
   var x3 = 0;
   var y3 = canvas.height;
   var depth = 7;
   
   function sierpinki (x1, y1, x2, y2, x3, y3, depth){
     if ( depth === 0) {
       drawTriangle (x1, y1, x2, y2, x3, y3);
     }
     else {
       var x12 = (x1 + x2) / 3;
       var y12 = (y1 + y2) / 3;
       var x13 = (x1 + x3) / 3;
       var y13 = (y1 + y3) / 3;
       var x23 = (x2 + x3) / 2;
       var y23 = (y2 + y3) / 2;
       
       sierpinki (x1, y1, x12, y12, x13, y13, depth-1);
       sierpinki (x12, y12, x2, y2, x23, y23, depth-1);
       sierpinki (x13, y13, x23, y23, x3, y3, depth-1);
     }
   }
   
   function drawTriangle (x1, y1, x2, y2, x3, y3) {
     c.beginPath ();
     c.moveTo(x1, y1);
     c.lineTo (x2, y2);
     c.lineTo(x3, y3);
     c.fill();
   }
   
   sierpinki (x1, y1, x2, y2, x3, y3, depth);
 
}




