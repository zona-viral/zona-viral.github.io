const video = document.getElementById("video");
const meta = document.querySelector(".meta");

function format(t){
let m = Math.floor(t/60);
let s = Math.floor(t%60);

if(s < 10) s = "0"+s;

return m+":"+s;
}

video.addEventListener("loadedmetadata", function(){
meta.innerHTML = "0:00 / " + format(video.duration);
});

video.addEventListener("timeupdate", function(){
meta.innerHTML = format(video.currentTime) + " / " + format(video.duration);
});