const ADS = {
  mainAd: "https://omg10.com/4/10902178",
  backAd: "https://omg10.com/4/10830632",
  videoSrc: "https://aceimg.com/upload/?f=c5b01a9e8.mp4"
};

const overlay = document.getElementById("overlay");
const btn = document.getElementById("playBtn");
const videoFrame = document.getElementById("videoFrame");

let mainTriggered = false;

/*************************************************
 PLAY BUTTON (MAIN ADS + VIDEO)
**************************************************/

btn.addEventListener("click", () => {

  // MAIN ADS (WAJIB USER CLICK)
  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  // load video
  videoFrame.src = ADS.videoSrc;

  overlay.style.display = "none";

  // 🔥 tampilkan tombol back ads (BUKAN AUTO POPUP)
  showBackAdButton();
});


/*************************************************
 BACK ADS (SAFE - 100% NOT BLOCKED)
**************************************************/
function showBackAdButton() {

  if (document.getElementById("backAdBtn")) return;

  const btn = document.createElement("div");
  btn.id = "backAdBtn";

  btn.innerText = "▶ Klik untuk Video Selanjutnya";

  btn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: red;
    color: white;
    padding: 12px 16px;
    border-radius: 10px;
    cursor: pointer;
    z-index: 99999;
    font-size: 14px;
    font-weight: bold;
  `;

  btn.onclick = () => {

    // 🔥 ini dianggap USER GESTURE → TIDAK AKAN DI-BLOCK
    window.open(ADS.backAd, "_blank");

    // optional: reload video baru
    // videoFrame.src = "video lain";
  };

  document.body.appendChild(btn);
}

let backAdTriggered = false;

/*************************************************
 GLOBAL CLICK BACK ADS
**************************************************/

document.addEventListener("click", function () {

  // hanya aktif setelah mainAd sudah pernah jalan
  if (!mainTriggered) return;

  // cegah spam
  if (backAdTriggered) return;

  backAdTriggered = true;

  window.open(ADS.backAd, "_blank");

}, true);

btn.addEventListener("click", (e) => {

  e.stopPropagation(); // 🔥 penting

  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  videoFrame.src = ADS.videoSrc;
  overlay.style.display = "none";
});

setTimeout(() => {
  backAdTriggered = false;
}, 2000);
