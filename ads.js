/*************************************************
 ADS CONFIG (CONTOH LINK SUDAH DIISI)
**************************************************/

const ADS = {
  // 🔴 IKLAN UTAMA (Monetag / popunder / direct link)
  main: "https://omg10.com/4/10902178",

  // 🟡 OPSIONAL (boleh diisi atau dikosongkan)
  second: "https://omg10.com/4/10830632"
};

/*
NOTE:
- GANTI "example" dengan link asli kamu
- kalau tidak pakai, boleh kosongkan: ""
*/

/*************************************************
 ELEMENT HTML
**************************************************/

const overlay = document.getElementById("overlay");
const btn = document.getElementById("playBtn");
const video = document.getElementById("video");
const banner = document.getElementById("adBanner");

/*************************************************
 STATE CONTROL
**************************************************/

let mainAdShown = false;
let backAdShown = false;

/*************************************************
 1. MAIN AD (WAJIB - CLICK USER)
**************************************************/

btn.addEventListener("click", () => {

  // hanya 1x popup agar tidak diblok browser
  if (!mainAdShown) {
    safeOpen(ADS.main);
    mainAdShown = true;
  }

  overlay.style.display = "none";
  video.play();
});

/*************************************************
 2. BACK AD (OPSIONAL - saat user balik ke tab)
**************************************************/

window.addEventListener("focus", () => {

  if (!backAdShown && mainAdShown) {
    backAdShown = true;

    setTimeout(() => {
      safeOpen(ADS.back);
    }, 1500);
  }

});

/*************************************************
 3. SAFE OPEN (lebih stabil di browser modern)
**************************************************/

function safeOpen(url) {

  // validasi basic
  if (!url || url === "") return;

  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  document.body.appendChild(a);
  a.click();
  a.remove();
}
