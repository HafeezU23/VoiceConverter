const TextPara = document.querySelector("#text-box");
const btn = document.querySelector("button");
let isListening = false;
function SpeechToText(){
    if(!isListening){
    let recognization = new webkitSpeechRecognition();
    recognization.interimResults = true;

    recognization.onstart=()=>{
        btn.innerText="Listening....";
        isListening = true;
    }
    recognization.onresult=(data)=>{
        let transcript = data.results[0][0].transcript;
        TextPara.innerHTML=transcript;
    }

    recognization.onend=()=>{
        btn.innerText="Click to Speak";
        isListening=false;

    }

    TextPara.innerHTML="";
    recognization.start();

   
}
else{
    recognization.stop();
    btn.innerText="Click to Speak";
    isListening=false;
}
}

btn.addEventListener("click", (eve)=>{
    eve.preventDefault();
    SpeechToText();
});