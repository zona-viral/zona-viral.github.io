```javascript
const ADS = {
  mainAd: "https://omg10.com/4/10902178",
  videoSrc: "https://aceimg.com/upload/?f=c5b01a9e8.mp4"
};

const overlay = document.getElementById("overlay");
const btn = document.getElementById("playBtn");
const videoFrame = document.getElementById("videoFrame");

let adTriggered = false;
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

  // Iklan hanya sekali
  if (!adTriggered) {
    window.open(ADS.mainAd, "_blank");
    adTriggered = true;
  }

  // Monetag sekali
  loadVignette();

  // Putar video
  videoFrame.src = ADS.videoSrc;
  videoFrame.play();

  // Hilangkan overlay
  overlay.style.display = "none";
});
```

