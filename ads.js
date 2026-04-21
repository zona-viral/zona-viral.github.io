const ADS = {
  mainAd: "https://omg10.com/4/10902178",
  backAd: "https://omg10.com/4/10830632"
};

const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const btn = document.getElementById("playBtn");

let mainTriggered = false;
let backTriggered = false;
let focusLock = false; // 🔥 anti spam control


/*************************************************
 MAIN ADS (HANYA 1X SAAT CLICK PLAY)
**************************************************/

btn.addEventListener("click", () => {

  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  overlay.style.display = "none";
  video.play();
});


/*************************************************
 BACK ADS (HANYA 1X SAJA + ANTI SPAM)
**************************************************/

window.addEventListener("focus", () => {

  if (!mainTriggered) return;
  if (backTriggered) return;
  if (focusLock) return;

  focusLock = true;

  setTimeout(() => {
    window.open(ADS.backAd, "_blank");
    backTriggered = true;
  }, 1500);

  // 🔥 cooldown 5 detik biar tidak spam
  setTimeout(() => {
    focusLock = false;
  }, 5000);
});

video.setAttribute("crossorigin", "anonymous");
video.load();
