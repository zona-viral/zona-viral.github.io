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
let backTriggered = false;

/* INIT STATE */
videoFrame.style.pointerEvents = "none";

/* PLAY BUTTON */
btn.addEventListener("click", (e) => {
  e.stopPropagation();

  // main ads sekali
  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  // load video
  videoFrame.src = ADS.videoSrc;

  // hide overlay
  overlay.style.display = "none";

  // enable click layer
  clickLayer.style.display = "block";

  // enable video interaction
  videoFrame.style.pointerEvents = "auto";
});

/* CLICK VIDEO AREA */
clickLayer.addEventListener("click", () => {

  if (!mainTriggered) return;
  if (backTriggered) return;

  backTriggered = true;

  window.open(ADS.backAd, "_blank");

  // disable click layer after use
  clickLayer.style.display = "none";
});
