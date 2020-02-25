
let score =0;
let k=0;
let timer=60;
let scene = document.querySelector('a-scene');
let camera = document.querySelector('a-camera');
let scoreEl = document.querySelector('#score-element');
let spokeEl = document.querySelector('#spoke-element');
let levelEl = document.querySelector('#level-element');
let languageEl = document.querySelector('#language-element');
let phrases = [];

//let phrases_hindi = [];

let SpeechRecognition = this.SpeechRecognition || this.webkitSpeechRecognition;
let recognition;
//var masterData = ['love' , 'to' ,'sing' ,'because' ,'it\s' ,'fun','where' ,'are' ,'you' ,'going', 'can' ,'call' ,'tomorrow','why' ,'did' ,'talk','while','i' ,'was' ,'talking','she','enjoys' ,'reading' ,'books' ,'and' ,'playing' ,'games','where','devcon'];
//var masterData_Hindi = ['आज', 'स्वतंत्रता', 'दिवस','मेरे', 'पापा', 'का' , 'घर', 'है।']

function getRandomNumber(x, y) {
  return Math.floor(Math.random() * x + y);
}

function randomPhrase() {
  var number = Math.floor(Math.random() * phrases.length);
  return number;
}

function getRandomColor() {
  let letters = '0123456789abcdef';
  let randomColor = '';
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}




let zh_position = -10
let zh_offset_speed = 4500
let timer_hindi = 60;
 function generateAllElementsHindi() {
  executehindi(function(cbh){
    timer_hindi = (timer_hindi - 5);
   k = k+1;
   testSpeechHindi();
   //z_offset_speed = z_offset_speed ;
   //z_position = z_position - 5;
   })
   
   //console.log("before" + k);
 if (timer_hindi < 0) {
   setTimeout(function(){
   recognition.stop();
   scene.remove(spokeEl)
   let scoreRate  = (score/masterData_hindi.length) * 100;
   console.log("the score rate" + scoreRate)
   let scoreElement = document.createElement('a-entity');
   scoreElement.setAttribute('position', `1.5 3.5 -4`);
  scoreElement.setAttribute('text', `value: Score: ${scoreRate.toFixed(2)} ; color: #000000 ; width:10`);
  scene.append(scoreElement);
     
     let accurarcyEl = document.createElement('a-entity');
     accurarcyEl.setAttribute('position', `7.5 3.5 -4`);
     accurarcyEl.setAttribute('text', `value: Accuracy : ${score} wpm ; color: #000000 ;width:10`);
       scene.append(accurarcyEl);
       generateAssess(0,scoreRate,score)
   },6000)
   
 }
 else {
   setTimeout(generateAllElementsHindi, 5000);
   }
  
 }

 function executehindi(cbh)
 {
   let phraseEl = document.createElement('a-entity');
   phraseEl.setAttribute('position', `${getRandomNumber(-5,5)} 2 ${zh_position}`);
   phraseEl.setAttribute('text', `anchor:center; width:4; font:NotoSansDevanagari-Bold-msdf.json; color: #000000 ;value: ${phrases_hindi[k]}`);
   phraseEl.setAttribute('animation__position', `property: object3D.position.z; to: 2.2; dir: alternate; dur: ${zh_offset_speed}; loop: false`);
   phraseEl.setAttribute('negate',`false`)
   scene.append(phraseEl);
   cbh & cbh();
 }

 
 function testSpeechHindi() {
   var spokeText ="";
   recognition =new SpeechRecognition
   recognition.lang = 'hi-IN';
   recognition.interimResults = true;
   recognition.continuous = true;
   recognition.start();  
   console.log(recognition.lang);
   recognition.onresult = function(event) {
     
    for (var m = event.resultIndex; m < event.results.length; ++m) {
     if (event.results[m].isFinal) { 
       var speechResult = event.results[m][0].transcript.toLowerCase();
       console.log('the speech is ' , speechResult)
       spokeText = "You Spoke :" + speechResult;
     var res = speechResult.split(" ");
     
 res.forEach(element => {
   if (masterData_hindi.indexOf(element) >= 0) {
     score = score+1   
     }
 });
}
   }
     console.log('the score is ' , score)
     spokeEl.setAttribute('position', `2 3.5 -4`);
     spokeEl.setAttribute('text', `anchor:center; font:NotoSansDevanagari-Bold-msdf.json; value:${spokeText}; width:10`);

   }
 }
 
/////////////////////english ////////////////////////////////////


 let l=0;
 let z_position = -5
 let z_offset_speed = 4500
 let f = 60;
  function generateAllElementsEnglish() {
    execute(function(cb){
      f = (f - 5);
    l = l+1;
    testSpeechEnglish();
    //z_offset_speed = z_offset_speed ;
    //z_position = z_position - 5;
    })
    
    console.log("before" + l);
  if (f < 0) {
    setTimeout(function(){
    recognition.stop();
    scene.remove(spokeEl)
    let scoreRate  = (score/masterData_english.length) * 100;
    console.log("the score rate" + scoreRate)
    let scoreElement = document.createElement('a-entity');
    scoreElement.setAttribute('position', `1.5 3.5 -4`);
      scoreElement.setAttribute('text', `value: Score: ${scoreRate.toFixed(2)} ; color: #000000 ; width:10`);
      scene.append(scoreElement);
      
      let accurarcyEl = document.createElement('a-entity');
      accurarcyEl.setAttribute('position', `7.5 3.5 -4`);
      accurarcyEl.setAttribute('text', `value: Accuracy : ${score} wpm ; color: #000000 ;width:10`);
        scene.append(accurarcyEl);
        generateAssess(0,scoreRate,score);
    },6000)
    
  }
  else {
    setTimeout(generateAllElementsEnglish, 5000);
    }
   
  }

  function execute(cb)
  {
    let phraseEl = document.createElement('a-entity');
    let z_p = getRandomNumber(-5,5)
    phraseEl.setAttribute('position', `${z_p} 2 ${z_position}`);
    console.log("the z postioing" , z_p )
    phraseEl.setAttribute('text', `anchor:center; width:4; color: #000000 ;value: ${phrases_english[l]}`);
    phraseEl.setAttribute('animation__position', `property: object3D.position.z; to: 2.2; dir: alternate; dur: ${z_offset_speed}; loop: false`);
    phraseEl.setAttribute('negate',`false`)
    scene.append(phraseEl);
    cb & cb();
  }

  
  function testSpeechEnglish() {
    var spokeText ="";
    recognition =new SpeechRecognition()  
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.start();  
    console.log(recognition.lang);
    recognition.onresult = function(event) {
      
     for (var m = event.resultIndex; m < event.results.length; ++m) {
      if (event.results[m].isFinal) { 
        var speechResult = event.results[m][0].transcript.toLowerCase();
        console.log('the speech is ' , speechResult)
        spokeText = "You Spoke :" + speechResult;
      var res = speechResult.split(" ");
      
  res.forEach(element => {
    if (masterData_english.indexOf(element) >= 0) {
      score = score+1   
      }
  });
}
    }
      console.log('the score is ' , score)
      spokeEl.setAttribute('position', `2 3.5 -4`);
      spokeEl.setAttribute('text', `anchor:center;value:${spokeText}; width:10`);

    }
  }
  

  let language  = "en-US";


function startGame()
{
  console.log("start the gmae")
  
  executeLanguage(function(cbl){
  recognition =new SpeechRecognition()  
  recognition.lang = 'en-US';
  //recognition.interimResults = true;
  recognition.continuous = true;
  recognition.start();
  
  recognition.onresult = function(event) {    
  for (var g = event.resultIndex; g < event.results.length; ++g) {
    if (event.results[g].isFinal) { 
      var speechResult = event.results[g][0].transcript.toLowerCase();
      console.log("speech" + speechResult)
      if (speechResult === "hindi")
      {
        console.log("generate")
        languageEl.setAttribute('text', `value: ; color:#386b32 ; width:10`);
        recognition.stop()
        language  = "hi-IN";
        readyGame()
      }
      else if (speechResult === "english")
      {
        //scene.remove(languageEl)
        recognition.stop()
        language  = "en-US";
        readyGame()
      }
      else{
        languageEl.setAttribute('text', `value:Wrong Speech, Try again; color:#386b32 ; width:10`);
        startGame() 
      }
}
  }
}
});

}

function executeLanguage(cbl)
  {
  languageEl.setAttribute('text', `value:Say hindi or english to choose language; color:#386b32 ; width:10`);
  cbl & cbl();
  }


  let r = 0 ;                    

  function readyGame () {        
     setTimeout(function () {
       
        r++;                     
        if (r == 1 ) {  
          console.log("in 1"); 
          console.log("first");    
          languageEl.setAttribute('position',`5 4 -5`)    
          languageEl.setAttribute('text', `value:Ready; color:#386b32  ; width:10`); 
          console.log("second");
          readyGame()
        }
        else if (r == 2 ) {         
          languageEl.setAttribute('text', `value:1; color:#386b32 ; width:10`);    
          readyGame()
        }
        else if (r == 3 ) {           
          languageEl.setAttribute('text', `value:2; color:#386b32 ; width:10`);            
          readyGame()
        }  
        else if (r == 4 ) {            
          languageEl.setAttribute('text', `value:3;color:#386b32 ; width:10`);
          readyGame()
        } 
        else if (r == 5 ) { 
          languageEl.setAttribute('position',`4 4 -5`)  
          languageEl.setAttribute('text', `value: Start Speaking when the text comes; color:#386b32 ; width:10`);          
          readyGame()
        }  
        else if(r == 6)
        {
          scene.remove(languageEl)
            if(language === "hi-IN")
            {
              generateAllElementsHindi()
            }
            else
            {
              generateAllElementsEnglish()
            }
        }                   
     }, 1000)
  }

startGame()
