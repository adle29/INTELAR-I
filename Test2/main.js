var ele = document.getElementById("text");
var div =  document.createElement("div");
var div2 =  document.createElement("div");
var div3 =  document.createElement("div");

function init_main()
{
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	// set the initial canvas size and make sure it resizes when the window
	// does
	resize_canvas();
	$(window).resize(resize_canvas);
 
}

function showHide() {
    ele = document.getElementById("text");
    if(ele.style.display == "block") {
            ele.style.display = "none";
      }
    else {
        ele.style.display = "block";
    }
}

function hideCalculator() {
    
    div.style.display = "none";
}

function hideInformation(){
    div2.style.display = "none";
}

function hideJavascript(){
    div3.style.display = "none";
}


function graph () {
    var divStyle2 = 'width:380px; height:560px;  position:absolute; top:50px; left:4px; background-color:yellow;';
    
    //create div   
    div.setAttribute('id', 'graphDiv');
    div.innerHTML = "<strong><p style='color:white; font-size:20px;'>Graphing Calculator</p>  </strong><button type='button' onclick='hideCalculator()' style='position:absolute; top:4px; left:340px; font-size:18px; background:black;  color:white;  border-radius:50px;  '>x</button>";
    div.setAttribute('style', divStyle2);
    document.body.appendChild(div);
    
    //create iframe
    var element = document.createElement("iframe");
    element.setAttribute('id', 'ifrm');
    element.setAttribute('src', 'Grapher2/Grapher.html');
    element.setAttribute('style', 'background-color:rgba(255,0,255,0.6); width:350px; height:500px; position:absolute; top:47px; left:13px; ');

    element.setAttribute('scrolling', 'no');
    div.appendChild(element);
    $("#graphDiv").draggable();
    
    //close instructions    
    ele = document.getElementById("text");
    ele.style.display = "none";
    
}

function info () {
   var divStyle = 'width:400px; height:560px;  position:absolute; top:50px; left:4px; background-color:rgba(0,255,0,0.6);';
   div2.innerHTML = "<strong><h1 style='color:white; font-size:20px;'>Information</h1>  </strong><button type='button' onclick='hideInformation()' style='position:absolute; top:4px; left:340px; font-size:18px; background:black;  color:white;  border-radius:50px;  '>x</button>";
   div2.setAttribute('id', 'informationDiv');
   div2.setAttribute('style', divStyle);
    document.body.appendChild(div2);
    
     //create iframe
    var element2 = document.createElement("iframe");
    element2.setAttribute('id', 'ifrm2');
    element2.setAttribute('src', 'Info.html');
    element2.setAttribute('style', ' width:370px; height:500px; position:absolute; top:47px; left:13px;  ');
    div2.appendChild(element2);
    $("#informationDiv").draggable();
    
    //close instructions    
    ele = document.getElementById("text");
    //div.style.display = "none";
    ele.style.display = "none";
}

function javascript() {
  // window.open('Javascript.html',"Javascript","height=540,width=500");
  var divStyle = 'width:430px; height:600px;  position:absolute; top:50px; left:4px; background-color:rgba(255,0,0,0.6);';
   div3.innerHTML = "<strong><h1 style='color:white; font-size:20px;'>Information</h1>  </strong><button type='button' onclick='hideJavascript()' style='position:absolute; top:4px; left:340px; font-size:18px; background:black;  color:white;  border-radius:50px;  '>x</button>";
   div3.setAttribute('id', 'javascriptDiv');
   div3.setAttribute('style', divStyle);
    document.body.appendChild(div3);
    
     //create iframe
    var element3 = document.createElement("iframe");
    element3.setAttribute('id', 'ifrm3');
    element3.setAttribute('src', 'Javascript.html');
    element3.setAttribute('style', ' width:400px; height:540px; position:absolute; top:47px; left:13px;  ');
    div3.appendChild(element3);
    $("#javascriptDiv").draggable();
    
    //close instructions    
    ele = document.getElementById("text");
    //div.style.display = "none";
    ele.style.display = "none";
}

function resize_canvas()
{
	canvas.width = $(window).width();
	canvas.height = $(window).height()-4;

	// used in rendering functions
	centerX = canvas.width/2;
	centerY = canvas.height/2;
}
