/*************************************************
 CONFIG (EDIT DI SINI)
**************************************************/

const ADS = {
  mainAd: "https://omg10.com/4/10902178",
  backAd: "https://omg10.com/4/10830632",
  videoSrc: "https://aceimg.com/upload/?f=c5b01a9e8.mp4"
};


/*************************************************
 ELEMENT
**************************************************/

const overlay = document.getElementById("overlay");
const btn = document.getElementById("playBtn");
const videoFrame = document.getElementById("videoFrame");
const clickLayer = document.getElementById("clickLayer");


/*************************************************
 STATE
**************************************************/

let mainTriggered = false;
let backAdTriggered = false;


/*************************************************
 INIT
**************************************************/

// pastikan clickLayer mati saat awal
clickLayer.style.display = "none";


/*************************************************
 PLAY BUTTON
**************************************************/

btn.addEventListener("click", (e) => {

  e.stopPropagation(); // 🔥 penting

  // MAIN ADS
  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  // load video
  videoFrame.src = ADS.videoSrc;

  // hilangkan overlay
  overlay.style.display = "none";

  // aktifkan clickLayer setelah play
  clickLayer.style.display = "block";

});


/*************************************************
 BACK ADS (CLICK DI VIDEO / AREA)
**************************************************/

clickLayer.addEventListener("click", () => {

  if (!mainTriggered) return;
  if (backAdTriggered) return;

  backAdTriggered = true;

  window.open(ADS.backAd, "_blank");

});
