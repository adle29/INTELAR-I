function sin(x){
 
 return Math.sin(x); 
 
}

function tan(x){
    
 return Math.tan(x); 
 
}

function cos(x) {

   return Math.cos(x); 
}

function sqrt(x){
    return Math.sqrt(x);   
}

function abs(x){
    return Math.abs(x);   
}



var model = (function(){
   return {
        numSegments:100,
        plotXMin: -10,
        plotXMax: 10,
        plotYMin: -10,
        plotYMax: 10,
        time: 0,
        executeEquation:null,
        setEquation: function (text) {
            var code = ["model.executeEquation = function(x){",
           " var y;",
           " var time = model.time",
           text+";",
           "  return y;",
           "};"].join("\n");
           
          eval(code);   
        }
    };
})();

model.setEquation("y = sin(x);");