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
    var ele = document.getElementById("text");
    if(ele.style.display == "block") {
            ele.style.display = "none";
      }
    else {
        ele.style.display = "block";
    }
}

function javascript() {
   window.open('Javascript.html',"Javascript","height=540,width=500");
}

function graph () {
   window.open('Grapher2/Grapher.html',"Graphing Calculator","height=630,width=430");
    
}

function info () {
    window.open('Info.html',"Information","height=460,width=430");  
}

function resize_canvas()
{
	canvas.width = $(window).width();
	canvas.height = $(window).height()-4;

	// used in rendering functions
	centerX = canvas.width/2;
	centerY = canvas.height/2;
}
