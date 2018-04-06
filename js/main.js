// main.js//
$("video").mediaelementplayer({
    features:['playpause','progress', 'volume', 'fullscreen']
});

const vid = document.getElementByTagName("video")
vid.addEventListner("click", vidUpdate);
let vidCaption= querySelectorAll("span");
let crntTime= vid.timeUpdate;
console.log crntTime;
