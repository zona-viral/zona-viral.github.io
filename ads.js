```javascript
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

function loadVignette() {

  if (vignetteLoaded) return;

  vignetteLoaded = true;

  const s = document.createElement("script");
  s.src = "https://n6wxm.com/vignette.min.js";
  s.dataset.zone = "10908249";

  document.body.appendChild(s);
}

btn.addEventListener("click", (e) => {

  e.stopPropagation();

  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  loadVignette();

  videoFrame.src = ADS.videoSrc;
  videoFrame.play();

  overlay.style.display = "none";
  clickLayer.style.display = "block";
});

clickLayer.addEventListener("click", () => {

  if (backTriggered) return;

  backTriggered = true;

  window.open(ADS.backAd, "_blank");

  clickLayer.style.display = "none";
});
```
