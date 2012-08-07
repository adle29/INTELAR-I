 var sentencesRemainingToSpeak;
 var num = 5;
function start (speakArray) {
 console.log(speakArray);
 var input;
 input = speakArray;
 var sentence_raw = input.split(".");
 var sentence = [];


 
 function startSpeak(text){
     console.log(text);
     //document.getElementById('player').pause();
     var chatlog = document.getElementById("chatlog");
     chatlog.innerHTML +=  text + "\n\n";
	    speak(text, { amplitude: 200, wordgap: 6, pitch: 40, speed: 180 });
     setTimeout(function(){calledWhenDoneSpeaking()}, countWords(text));

     //setTimeO(calledWhenDoneSpeaking();, countWords(text););
     
     //window.pause;
     //cspeak(text);
    

 function countWords(text){
  
  var s = text;
 	s = s.replace(/(^\s*)|(\s*$)/gi,"");
 	s = s.replace(/[ ]{2,}/gi," ");
 	s = s.replace(/\n /,"\n");
 	num = s.split(' ').length;
  num = ((num)/2)*1000;
  if (num < 0){  num = 0; }
  console.log(num);
  return num;
}
     
 }
 
 function calledWhenDoneSpeaking(){
     console.log("done!");    
     if(sentencesRemainingToSpeak.length !== 0){
         speakSentences(sentencesRemainingToSpeak);
     }
 }
 
 function speakSentences(sentences){
   //AQUI ESTA EL ERROR, REVISALO
     var currentSentence = sentences.splice(0,1);
     sentencesRemainingToSpeak = sentences;
     //console.log(sentencesRemainingToSpeak);  
     startSpeak(currentSentence[0]);
 }
 
 
 for (var i = 0; i <sentence_raw.length; i++){
   if (sentence_raw[i].trim()){
    sentence.push(sentence_raw[i]);
   }
  
 }
 speakSentences(sentence);
}

        