/*************************************************
  ADS CONFIG (SEMUA LINK DI SINI)
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


let mainTriggered = false;
let backTriggered = false;
let lock = false;


/*************************************************
  PLAY BUTTON
**************************************************/

btn.addEventListener("click", () => {

  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  videoFrame.src = ADS.videoSrc;

  overlay.style.display = "none";
});


/*************************************************
  BACK ADS (ANTI SPAM)
**************************************************/

window.addEventListener("focus", () => {

  if (!mainTriggered) return;
  if (backTriggered) return;
  if (lock) return;

  lock = true;

  setTimeout(() => {
    window.open(ADS.backAd, "_blank");
    backTriggered = true;
  }, 1500);

  setTimeout(() => {
    lock = false;
  }, 5000);

});
