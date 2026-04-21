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
    showBackAdButton();


/*************************************************
 BACK ADS (SAFE VERSION - NO BLOCK CHROME)
**************************************************/

function showBackAdButton() {

  // cegah dobel tombol
  if (document.getElementById("backAdBtn")) return;

  const btn = document.createElement("div");
  btn.id = "backAdBtn";

  btn.innerText = "▶ Lanjut / Bonus Video";

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
