/*************************************************
 ADS CONFIG (EDIT DI SINI SAJA)
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


/*************************************************
 STATE
**************************************************/

let mainTriggered = false;
let backAdTriggered = false;


/*************************************************
 PLAY BUTTON (MAIN ADS)
**************************************************/

btn.addEventListener("click", (e) => {

  // 🔥 penting: cegah trigger global click
  e.stopPropagation();

  // MAIN ADS (1x saja)
  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  if (!mainTriggered) {
    window.open(ADS.backAd, "_blank");
    mainTriggered = true;
  }
 
  // load video iframe
  videoFrame.src = ADS.videoSrc;

  // hilangkan overlay
  overlay.style.display = "none";

});


/*************************************************
 GLOBAL CLICK BACK ADS (VERSI PALING KUAT)
**************************************************/

document.addEventListener("mousedown", function (e) {

  // hanya aktif setelah user klik play
  if (!mainTriggered) return;

  // cegah spam
  if (backAdTriggered) return;

  // jangan trigger saat klik tombol play
  if (e.target.id === "playBtn") return;

  backAdTriggered = true;

  // delay kecil biar tidak bentrok browser
  setTimeout(() => {
    window.open(ADS.backAd, "_blank");
  }, 100);

}, true);
