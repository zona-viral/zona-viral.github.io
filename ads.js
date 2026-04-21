/*************************************************
  ADS CONFIG (SEMUA LINK DI SINI)
**************************************************/

const ADS = {

  // 🔴 redirect ads saat klik play
  mainAd: "https://omg10.com/4/10902178",

  // 🔴 ads saat user kembali tab
  backAd: "https://omg10.com/4/10830632",

  // 🟢 video iframe source
  videoSrc: "https://aceimg.com/upload/?f=c5b01a9e8.mp4",

  // 🔵 native ad script
  nativeScript: "https://publishedelegance.com/43f939c05389467daaa486c01c358487/invoke.js",

  // 🟠 banner ad
  bannerKey: "e9de31e0e5b8ab0e9dd7a40d3d6cab3f",
  bannerScript: "https://publishedelegance.com/e9de31e0e5b8ab0e9dd7a40c358487/invoke.js"
};


/*************************************************
  ELEMENT
**************************************************/

const overlay = document.getElementById("overlay");
const btn = document.getElementById("playBtn");
const videoFrame = document.getElementById("videoFrame");

const nativeAd = document.getElementById("native-ad");
const bannerAd = document.getElementById("banner-ad");


let mainTriggered = false;
let backTriggered = false;
let focusLock = false;


/*************************************************
  PLAY BUTTON LOGIC
**************************************************/

btn.addEventListener("click", () => {

  // 🔴 MAIN ADS (1X SAJA)
  if (!mainTriggered) {
    window.open(ADS.mainAd, "_blank");
    mainTriggered = true;
  }

  // set video iframe
  videoFrame.src = ADS.videoSrc;

  overlay.style.display = "none";
});


/*************************************************
  BACK ADS (ANTI SPAM)
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

  setTimeout(() => {
    focusLock = false;
  }, 5000);

});


/*************************************************
  LOAD NATIVE ADS
**************************************************/

(function () {
  const s = document.createElement("script");
  s.async = true;
  s.src = ADS.nativeScript;
  nativeAd.appendChild(s);
})();


/*************************************************
  LOAD BANNER ADS
**************************************************/

(function () {

  const s1 = document.createElement("script");
  s1.innerHTML = `
    atOptions = {
      key: "${ADS.bannerKey}",
      format: "iframe",
      height: 300,
      width: 160,
      params: {}
    };
  `;

  const s2 = document.createElement("script");
  s2.src = ADS.bannerScript;

  bannerAd.appendChild(s1);
  bannerAd.appendChild(s2);

})();
