const ADS = {
  mainAd: "https://omg10.com/4/10902178",
  backAd: "https://omg10.com/4/10830632",
  videoSrc: "https://aceimg.com/upload/?f=c5b01a9e8.mp4"
};

const overlay = document.getElementById("overlay");
const btn = document.getElementById("playBtn");
const videoFrame = document.getElementById("videoFrame");
const clickLayer = document.getElementById("clickLayer");

let mainTriggered = false;
let backAdTriggered = false;

/* INIT */
videoFrame.style.pointerEvents = "none";
clickLayer.style.display = "none";

/* PLAY BUTTON */
btn.addEventListener("click", (e) => {
  e.stopPropagation();

  // main ads (tetap seperti kamu)
  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  // load video
  videoFrame.src = ADS.videoSrc;

  // hide overlay
  overlay.style.display = "none";

  // aktifkan video interaction
  videoFrame.style.pointerEvents = "auto";
  clickLayer.style.display = "block";
});

/* CLICK VIDEO AREA */
clickLayer.addEventListener("click", () => {

  if (!mainTriggered) return;
  if (backAdTriggered) return;

  backAdTriggered = true;

  window.open(ADS.backAd, "_blank");

  // disable click layer setelah dipakai
  clickLayer.style.display = "none";
});
