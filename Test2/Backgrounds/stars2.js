(function(){
 
 canvas.width  = window.innerWidth;
 canvas.height  = window.innerHeight;
 
 var numStars = 500;
 var radius = 2;
 var focalLength = canvas.width;
 var centerX = canvas.width/2;
 var centerY = canvas.height/2;
 
 var star, i;
 var stars = [];
 
 
  initiate();
 setInterval(function(){
     moveStars();
     drawStars();
 },30);
 
 
 function initiate () {
 
   for (i = 0; i < numStars; i++ ) {
 star = {
       x: Math.random() * canvas.width,
       y: Math.random() * canvas.height,
       z: Math.random() * canvas.width
     };
     stars.push(star);
   }
 }
 
 function moveStars () {
   for (i = 0; i < numStars; i++ ) {
     star = stars[i];
     star.z--;
     if(star.z <= 0){
       star.z = canvas.width;
     }
   }
 }
   
   function drawStars () {
     var pixelX, pixelY, pixelRadius;
     context.fillStyle = "rgba(0, 0, 0, 0.1)";
     //context.fillStyle = "black";
     context.fillRect(0, 0, canvas.width, canvas.height);
     context.fillStyle = "cyan";
     for (i = 0; i < numStars; i++ ) {
       star = stars[i];
       pixelX = (star.x - centerX) * (focalLength/star.z);
       pixelX += centerX;
       pixelY = (star.y - centerY) * (focalLength/star.z);
       pixelY += centerY;
       pixelRadius = radius  * (focalLength/star.z);
       context.beginPath ();
       context.arc(pixelX, pixelY, pixelRadius, 0, 2 * Math.PI);
       context.fill();
                 }
   }         
      
 canvas.addEventListener ("mousemove", function (e){
   focalLength = e.x;  
 });
   

} )();
