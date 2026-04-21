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

/*************************************************
 INIT (SUPER PENTING)
**************************************************/

// saat awal:
// iframe & clickLayer TIDAK BOLEH TERIMA KLIK
videoFrame.style.pointerEvents = "none";
clickLayer.style.display = "none";

/*************************************************
 PLAY BUTTON
**************************************************/

btn.addEventListener("click", (e) => {

  e.stopPropagation();

  // main ads
  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  // load video
  videoFrame.src = ADS.videoSrc;

  // hilangkan overlay
  overlay.style.display = "none";

  // aktifkan interaksi setelah play
  videoFrame.style.pointerEvents = "auto";
  clickLayer.style.display = "block";

});


/*************************************************
 BACK ADS
**************************************************/

clickLayer.addEventListener("click", () => {

  if (!mainTriggered) return;
  if (backAdTriggered) return;

  backAdTriggered = true;

  window.open(ADS.backAd, "_blank");

  // 🔥 MATIKAN CLICKLAYER SETELAH DIPAKAI
  clickLayer.style.display = "none";

});
