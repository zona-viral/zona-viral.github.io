/*************************************************
  ADS CONFIG (🔴 SEMUA LINK DI SINI SAJA)
**************************************************/

const ADS = {

  // 🔴 CLICK ADS (popup pertama)
  mainAd: "https://omg10.com/4/10902178",

  // 🔴 BACK ADS (saat user balik tab)
  backAd: "https://omg10.com/4/10830632",

  // 🔵 NATIVE ADS SCRIPT
  nativeScript: "https://publishedelegance.com/43f939c05389467daaa486c01c358487/invoke.js",
  nativeContainerId: "container-43f939c05389467daaa486c01c358487",

  // 🟠 BANNER ADS SCRIPT
  bannerKey: "e9de31e0e5b8ab0e9dd7a40d3d6cab3f",
  bannerScript: "https://publishedelegance.com/e9de31e0e5b8ab0e9dd7a40d3d6cab3f/invoke.js"
};


/*************************************************
  ELEMENT
**************************************************/

const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const btn = document.getElementById("playBtn");

const nativeAd = document.getElementById("native-ad");
const bannerAd = document.getElementById("banner-ad");

let triggered = false;


/*************************************************
  1. MAIN ADS (CLICK PLAY)
**************************************************/

btn.addEventListener("click", () => {

  if (!triggered) {
    window.open(ADS.mainAd, "_blank");
    triggered = true;
  }

  overlay.style.display = "none";
  video.play();
});


/*************************************************
  2. BACK ADS (USER BALIK TAB)
**************************************************/

window.addEventListener("focus", () => {

  if (triggered) {
    setTimeout(() => {
      window.open(ADS.backAd, "_blank");
    }, 1500);
  }

});


/*************************************************
  3. LOAD NATIVE ADS
**************************************************/

(function loadNativeAd() {

  const script = document.createElement("script");
  script.async = true;
  script.src = ADS.nativeScript;

  nativeAd.appendChild(script);

})();


/*************************************************
  4. LOAD BANNER ADS
**************************************************/

(function loadBannerAd() {

  const script1 = document.createElement("script");

  script1.innerHTML = `
    atOptions = {
      key: "${ADS.bannerKey}",
      format: "iframe",
      height: 300,
      width: 160,
      params: {}
    };
  `;

  const script2 = document.createElement("script");
  script2.src = ADS.bannerScript;

  bannerAd.appendChild(script1);
  bannerAd.appendChild(script2);

})();
