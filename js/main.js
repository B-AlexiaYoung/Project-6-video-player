// main.js//
$("video").mediaelementplayer({
    features:['playpause','progress', 'volume', 'fullscreen']
});


//variables
const subtext= document.getElementsByClassName("hiLightText");
console.log(subtext)
let vid = document.getElementById("vidItem");
const wrapper= document.getElementsByClassName('wrapper');
//const tracksub= subtext.length + 1;


// add timeupdate listener and function for highlighting text while video plays.
vid.addEventListener('timeupdate', function(){timefunction();});

function timefunction(){
    let playTime=(vid.currentTime);
    //console.log('trace');
    //console.log(playTime);
for(let i=0; i < subtext.length; i++){
    //console.log('lizzy');
    if (playTime >= subtext[i].getAttribute("data-start") && playTime <= subtext[i].getAttribute("data-end")){
    //if (playTime > subtext[i].dataset.start && playtime < subtext[i].dataset.end){
//console.log(subtext[i].getAttribute("data-start"));
        subtext[i].style.backgroundColor="yellow";
        //console.log('playTime');
//console.log('subtext[i].getAttribute("data-start")')
    } else {
        subtext[i].style.backgroundColor="white";
    }
}
};

// add click listener to spans for matching video playback.
//function subToVideo() {

 //   subtext.play= subtext.getAttribute("data-start");
//};
// wrapper.addEventListener('click', (event));
//     //subtext.play= subtext.getAttribute("data-start");
// if (event.target.class == 'hiLightText') {
//             subtext.play = subtext.getAttribute("data-start");

// };
document.addEventListener('click', (event) => {
    let playThis= event.target;
console.log(playThis);
    if (playThis.className == 'hiLightText') {
        let getspan=event.target;
        vid.currentTime = getspan.getAttribute('data-start') ;
        vid.play();
    };
});