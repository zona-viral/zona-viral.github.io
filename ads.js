```javascript
const ADS = {
  mainAd: "https://omg10.com/4/10902178",
  videoSrc: "https://aceimg.com/upload/?f=c5b01a9e8.mp4"
};

const overlay = document.getElementById("overlay");
const playBtn = document.getElementById("playBtn");
const videoFrame = document.getElementById("videoFrame");

let adTriggered = false;

playBtn.addEventListener("click", () => {

  // Iklan hanya sekali
  if (!adTriggered) {
    window.open(ADS.mainAd, "_blank");
    adTriggered = true;
  }

  // Muat video
  videoFrame.src = ADS.videoSrc;

  // Putar video
  videoFrame.play();

  // Hilangkan tombol play
  overlay.style.display = "none";
});
```
