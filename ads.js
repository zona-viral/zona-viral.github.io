/* =========================================
   VUDOL ADS.JS
   File ini berisi semua script iklan
========================================= */


// ===============================
// VIDEO CLICK / PLAY ADS
// Fungsi: buka iklan saat user klik video (sekali saja)
// ===============================

const AD_URL = "https://omg10.com/4/10902178";

const video = document.getElementById("video");
const btn = document.getElementById("playBtn");
const overlay = document.getElementById("overlay");

// cek apakah user sudah lihat iklan
let adShown = localStorage.getItem("adShown");

btn.addEventListener("click", () => {

  // buka iklan hanya 1x
  if (!adShown) {
    window.open(AD_URL, "_blank");
    localStorage.setItem("adShown", "true");
  }

  overlay.style.display = "none";
  video.play();
});


// ===============================
// PAGE CLICK ADS
// Fungsi: popup iklan saat klik pertama user
// ===============================

document.addEventListener("click", () => {
  window.open("https://publishedelegance.com/qgv3xdwkgz?key=6b1551c76dea12f5ce6069844b58a4e4", "_blank");
}, { once: true });


// ===============================
// TAB FOCUS ADS
// Fungsi: iklan muncul saat user kembali ke tab (sekali saja)
// ===============================

let focusShown = false;

window.addEventListener("focus", () => {
  if (!focusShown) {
    focusShown = true;
    window.open("https://omg10.com/4/10902178", "_blank");
  }
});


// ===============================
// BANNER ADS (NATIVE / SCRIPT)
// Fungsi: load banner dari ad network
// ===============================

const script = document.createElement("script");
script.async = true;
script.dataset.cfasync = "false";
script.src = "https://publishedelegance.com/43f939c05389467daaa486c01c358487/invoke.js";
document.body.appendChild(script);

// container untuk banner
const container = document.createElement("div");
container.id = "container-43f939c05389467daaa486c01c358487";
document.body.appendChild(container);
