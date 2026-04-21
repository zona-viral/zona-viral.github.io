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


/*************************************************
 PLAY BUTTON
**************************************************/

btn.addEventListener("click", () => {

  // 🔴 MAIN ADS (1X ONLY)
  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  // LOAD VIDEO
  videoFrame.src = ADS.videoSrc;

  // HIDE OVERLAY
  overlay.style.display = "none";

  // SHOW BACK ADS BUTTON
  setTimeout(showBackAdButton, 500);

});


/*************************************************
 BACK ADS (SAFE BUTTON, NOT BLOCKED CHROME)
**************************************************/

function showBackAdButton() {

  if (document.getElementById("backAdBtn")) return;

  const btn = document.createElement("div");
  btn.id = "backAdBtn";

  btn.innerText = "▶ Lanjut / Bonus";

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
    window.open(ADS.backAd, "_blank");
  };

  document.body.appendChild(btn);
}
