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
let vignetteLoaded = false;

/* INIT */
videoFrame.style.pointerEvents = "none";

/* LOAD MONETAG */
function loadVignette(){
  if (vignetteLoaded) return;
  vignetteLoaded = true;

  let s = document.createElement('script');
  s.src = 'https://n6wxm.com/vignette.min.js';
  s.dataset.zone = '10908249';
  document.body.appendChild(s);
}

/* PLAY BUTTON */
btn.addEventListener("click", (e) => {
  e.stopPropagation();

  // 🔥 MAIN ADS (JELAS)
  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  // 🔥 MONETAG (BACKGROUND)
  loadVignette();

  // load video
  videoFrame.src = ADS.videoSrc;

  // hide overlay
  overlay.style.display = "none";

  // enable click
  clickLayer.style.display = "block";
  videoFrame.style.pointerEvents = "auto";
});

/* CLICK VIDEO */
clickLayer.addEventListener("click", () => {

  if (!mainTriggered) return;
  if (backTriggered) return;

  backTriggered = true;

  // 🔥 BACK ADS (JELAS)
  window.open(ADS.backAd, "_blank");

  // 🔥 MONETAG (SECOND TRIGGER)
  loadVignette();

  clickLayer.style.display = "none";
});
