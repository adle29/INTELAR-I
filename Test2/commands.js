window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();


//Mood meter
var mood = 3;
var name;
var voiceVolume = 40;
//

// swearing: causes the program to critisize you
var cmd_swearing = /[^\w](crap|shit|fuck|damn|ass)[^\w]/i;

// greeting: causes the program to greet you back
var cmd_greeting = /[^\w](hello|hey|good\s+morning|hola|what's\s+up|hi|hey\s+there)[^\w]/i;

// valediction: causes the program to say good bye
var cmd_valediction = /[^\w](bye|good\s*bye|see\s+you|see\s+you\s+later)[^\w]/i;

// apology: the program is very forgiving
var cmd_apology = /[^\w](sorry)[^\w]/i;

var cmd_everybody =/[^\w]say\s+hello\s+to\s+everybody[^\w]/i;

//math
var cmd_math = /[^\w]numbers|graphing\s+calculator|calculator[^\w]/i;

// opinion_of: the user stated an opinion of the face
var cmd_opinion_of = /[^\w]i\s+(\w+)\s+you[^\w]/i;

// var cmd_about = /[^\w]tell\s+me|what|about\s+(\w+)[^\w]/i;
var cmd_about = /about\s+(.*)/i; 

var cmd_music =/[^\w]play\s+music[^\w]/i;

var cmd_ai_fav_food = /(what'?s|is)\s+(your|you're)\s+fav\w*\s+food/i;
var cmd_my_fav_food = /my\s+fav\w*\s+food/i;

var cmd_state = /[^\w](how\s+are\s+you|great|i\s+am\s+good|regular|bad|good|fine|do\s+you\s+feel)[^\w]/i;

var cmd_calculator = /[^\w]\d[^\w]/i;

var mem_name = /[^\w]my\s+name\s+is\s+(\w+)[^\w]/i;

var cmd_notName =/[^\w](i'm|i\s+am)\s+not[^\w]/i;

var cmd_introduce =/[^\w]introduce\s+yourself|tell\s+me\s+about\s+yourself[^\w]/i;
var cmd_stop = /[^\w]stop|pause|no\s+more|enough|no[^\w]/i;

// SPEAK&TALK
// This function calls cpeak() to say the text verbally and sets the lastmsg
// <div> based on it for debugging purposes.

function cspeak(text)
{
	var chatlog = document.getElementById("chatlog");
	chatlog.innerHTML += " AI: " + text + "\n";
 if (voiceVolume > 40) {
  voiceVolume = 40;
 }
 else if (voiceVolume < 0){
  voiceVolume = 10;
 }
 console.log(voiceVolume);
	speak(text, { amplitude: 200, wordgap: 6, pitch: voiceVolume, speed: 180 });
}


function handle_command()
{
	// get the chat log
	var chatlog = document.getElementById("chatlog");

	// get the command field
	var commandbox = document.getElementById("commandbox");

	// get the command
	var command = " " + commandbox.value + " ";

	// clear the command field
	commandbox.value = "";

	// log the command
	chatlog.innerHTML += " You: " + command + "\n";
	
	// scroll down the chat log
	chatlog.scrollTop = chatlog.scrollHeight;

	// branch based on the command
	if (cmd_swearing.test(command))
	{
  voiceVolume -= 10;
		cspeak("is swearing really necessary ");
  mood--;
	}
 else if (cmd_everybody.test(command)){
  cspeak('Hello everybody');
 }
 else if (cmd_calculator.test(command)) {
   console.log("worked!");
   var num = command;
   console.log(num);
   var input = num.split("+");
   var result =0;
   var sayResult;
   for (var i =0; i < input.length; i++) {
    result += parseInt(input[i]);
  }
   sayResult = result.toString();
  
  cspeak(sayResult);
 }
	else if (cmd_math.test(command)){
		javascript() ;
	}
 
 else if (cmd_stop.test(command)){
  sentencesRemainingToSpeak.length = 0;
 	document.getElementById("player").pause();
  boolean = false;
  //document.getElementById('music').pause();
  cspeak("Ok, no more information for now.");
	}
 
	else if (cmd_greeting.test(command))
	{
  console.log(localStorage.getItem("name"));
  if (localStorage.getItem('name') == null || name == '_blank') {
    cspeak("Hello, what's your name?");
  }
  else {
 		switch (Math.floor(Math.random() * 3))
 		{
 		case 0:
 			cspeak("hey there "+name);
 			break;
 		case 1:
 			cspeak("nice to see you "+name);
 			break;
 		case 2:
 			cspeak("hello "+name);
 			break;
 		
 		}
  }
	}
 else if(cmd_introduce.test(command)){
      cspeak("My name is Intelar. I am prototype of an artificial intelligence still in development designed to impulse  self-learning and show the great functionalities of Javascript. I have different functions. You can chat with me, ask me about information,and use my integrated graphing calculator. ");  
 }
	else if (cmd_state.test(command))
	{
		var state = cmd_state.exec(command)[1];

		// process it
		switch (state.toLowerCase())
		{
			case "how are you":
				cspeak ("I am great, and you " +name+"?");
				
				break;
			case("i am good"):			
				cspeak("Awesome");
				break;
			case("good"):
				cspeak("Awesome");
				break;
			case("bad"):
				cspeak("Why? Tell me about it.");
				break;
			case("regular"):
				cspeak("It happens");
				break;
			default:
				cspeak("Sure.");
				break;
		}
			mood++;
	}
  else if (mem_name.test(command)){
   var nombre = mem_name.exec(command)[1];
   console.log(nombre); // aqui te quedaste
   localStorage.setItem('name', nombre);
   name = localStorage.getItem('name');
   cspeak("Nice to meet you " + name);
 }
 else if (cmd_notName.test(command)){
    cspeak("Then, who are you? ");
    localStorage.removeItem('name');
 }
	else if (cmd_valediction.test(command))
	{
		switch (Math.floor(Math.random() * 3))
		{
		case 0:
			cspeak("i will miss you "+name);
			break;
		case 1:
			cspeak("see ya later " +name);
			break;
		case 2:
			cspeak("Awwww...I was enjoying ar conversation.");
			break;
		}
  localStorage.removeItem('name');
	}
	else if (cmd_apology.test(command))
	{
		cspeak("That's okay!");
	}
	else if (cmd_about.test(command)){
 		var about = cmd_about.exec(command)[1];
   voiceVolume += 10;
   console.log(about);
 			//**********************DBPEDIA*********************
 			var dbpedia = 'http://dbpedia.org/';
    
   //var keyword = about.charAt(0).toUpperCase()+ about.slice(1);
   var keyword = about.replace(/\b./g, function(m){ return m.toUpperCase(); });
   keyword = keyword.trim().replace(/ /g, "_");
  // keyword = keyword.replace(/\w\S*/g, keyword.slice(0,1).toUpperCase()) ;
   
   console.log(keyword);
 			var query = [
  				 'PREFIX dbo: <http://dbpedia.org/ontology/> ',
  				 'PREFIX resource: <http://dbpedia.org/resource/>',
   				'SELECT ?abstract WHERE {',
   				'resource:'+keyword+' dbo:abstract ?abstract.',
  				 "FILTER (lang(?abstract)='en')",
  				 '}',
  				 'LIMIT 500'
 			].join(' ');
 
 
 			var url = dbpedia+'sparql?query='+query+'&format=json';
 
    $.get(url, function(result) {
     		var list = result.results.bindings;
       var string = "";
       // console.log(list.abstract.value);
   				for(var i in list) {
         string =  list[i].abstract.value;
          
   				}
      // string = JSON.stringify(string);
       //console.log(string);
   				 // console.log(list[i]);
    				// document.write(list[i].abstract.value+"<br>");
       if ( list[i]== null) {
           console.log("si es null");
          cspeak("I am sorry " +name+ ", there is no information available of what you requested.");
        }
        else {
     			 start(string);
         
        }
 			});
    
    
 			//**********************DBPEDIA*********************
		
	}
	
	else if (cmd_opinion_of.test(command))
	{
		var opinion = cmd_opinion_of.exec(command)[1];

		switch (opinion.toLowerCase())
		{
		case "love":
			cspeak("I love you more.");
   voiceVolume += 10;
			break;
		case "like":
			switch (Math.floor(Math.random() * 2))
			{
			case 0:
				cspeak("I like you too!");
				mood++;
				break;
			case 1:
				cspeak("The feeling's mutual.");
				mood++;
				break;
			}
   voiceVolume += 10;
			break;
		case "dislike":
   
			switch (Math.floor(Math.random() * 2))
			{
			case 0:
    voiceVolume -= 10;
				cspeak("Really? But I thought we were becoming friends!");    
				mood--;
				break;
			case 1:
    voiceVolume -= 10;
				cspeak("But why "+name+ "?    What have I done that is so wrong?");
				mood--;
				break;
   
			}
	//	voiceVolume -= 10;
  break;
		case "hate":
   voiceVolume -= 10;
			cspeak("What? Well...I hate you too!");
			mood--;   
			break;
		default:
			cspeak("what?");
			mood--;
			break;
   
		}
	}
	else if (cmd_ai_fav_food.test(command))
	{
		cspeak("My favorite food is sushi!");
	}
	else if (cmd_my_fav_food.test(command))
	{
		cspeak("Delicious!");
	}
	
	else
	{
		switch (Math.floor(Math.random() * 26))
		{
		case 0:
			cspeak("Excuse me, what did you say?");
			break;
		case 1:
			cspeak("I do not understand what you said.");
			break;
		
		case 2:
			cspeak("I am sorry, my answers are limited...");
			break;
			
		case 3:
			cspeak("Pardon?");
			break;

		case 4:
			cspeak("Pardon me?");
			break;
			
		case 5:
			cspeak("Beg your pardon");
			break;
		
		case 6:
			cspeak("I beg your pardon");
			break;
			
		case 7:
			cspeak("Excuse me?");
			break;
			
		case 8:
			cspeak("What was that " +name+"?");
			break;

		case 9:
			cspeak("Sorry?");
			break;
		
		case 10:
			cspeak("Huh?");
			break;

		case 11:
			cspeak("What?");
			break;
			
		case 12:
			cspeak("Come again?");
			break;

		case 13:
			cspeak("Say what?");
			break;
			
		case 14:
			cspeak("Pass that by me again?");
			break;
			
		case 15:
			cspeak("I am afraid I do not get your idea "+name);
			break;
			
		case 16:
			cspeak("Sorry. I can not follow what you are saying to me " +name );
			break;
			
		case 17:
			cspeak("Unfortunately, I can not clearly make sense of what you are telling me.");
			break;
			
		case 18:
			cspeak("I am a bit confused. Do you mind explaining it again?");
			break;
			
		case 19:
			cspeak("I am afraid I am unclear about what you mean " +name);
			break;
			
		case 20:
			cspeak("Would you mind clarifying what you said? I am afraid I don not follow.");
			break;
			
		case 22:
			cspeak("I simply do not catch what you are saying. Sorry " +name);
			break;
			
		case 23:
			cspeak("It is all Greek to me, I am afraid.");
			break;

		case 24:
			cspeak("I am sorry. I can not make head or tail of what you are saying.");
			break;
			
		default:
			cspeak("I am not quite sure I follow you " +name);
			break;
		}
	}
}

// HANDLE KEYBOARD-ONLY INPUT
// This callback is invoked when the user types a key into the input box. It
// checks to see if the key was "enter," and if it is submits the command.

function handle_keypress(event)
{
	// 13 = \n (newline)
	if (event.which == 13 || event.keycode == 13)
	{
		handle_command();
	}
}


function speech (event) {
	if (event.which != 13 || event.keycode != 13)
	{
		handle_command();
	}
}




   