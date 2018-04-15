// main.js//
$(document).ready(function(){$('video, audio').mediaelementplayer();});
//add control buttons to video
$("video").mediaelementplayer({
    features:['playpause','progress', 'volume', 'fullscreen']
});


//variables
const subtext= document.getElementsByClassName("hiLightText");
let vid = document.getElementById("vidItem");
const wrapper= document.getElementsByClassName('wrapper');
let width= 800 +"px";
let height= 500 +"px";

// add timeupdate listener and function for highlighting text while video plays.
vid.addEventListener('timeupdate', function(){timefunction();});

function timefunction(){
    let playTime=(vid.currentTime);
for(let i=0; i < subtext.length; i++){
    if (playTime >= subtext[i].getAttribute("data-start") && playTime <= subtext[i].getAttribute("data-end")){
        subtext[i].style.backgroundColor="yellow";
    } else {
        subtext[i].style.backgroundColor="white";
    }
}
};

// add click listener to document and filter for "hiLightText" class only for matching video playback.

document.addEventListener('click', (event) => {
    let playThis= event.target;
    if (playThis.className == 'hiLightText') {
        let getspan=event.target;
        vid.currentTime = getspan.getAttribute('data-start') ;
        vid.play();
    };
});

const mediaQry = (x) => {
    if (x.matches) { // If media query matches
        vid.setAttribute("width", width);
        vid.setAttribute("height", height);
    }
}
var x = window.matchMedia("(min-width: 768px)")
mediaQry(x) // Call listener function at run time
x.addListener(mediary) // Attach listener function on state changes