
/* =========================================
   ADS + PLAY OVERLAY FIX FINAL
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const wrapper = document.getElementById("player-wrapper");

  if (!wrapper) return;

  wrapper.style.position = "relative";

  /* OVERLAY */
  const overlay = document.createElement("div");

  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.6)";
  overlay.style.zIndex = "99999";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.cursor = "pointer";

  overlay.innerHTML = `
    <div style="
      padding:14px 22px;
      background:#ff3b3b;
      color:#fff;
      border-radius:8px;
      font-size:16px;
      font-family:Arial;
      user-select:none;
    ">
      ▶ Play Video
    </div>
  `;

  wrapper.appendChild(overlay);

  /* klik overlay = hilang */
  overlay.addEventListener("click", function () {
    overlay.remove();
  });

});


/* =========================================
   IKLAN CLICK PERTAMA
========================================= */

const CLICK_AD =
"https://mistletoeframesethel.com/njwe0qwps?key=404e45db2f424f77242f60d282efadc7";

let firstClick = false;

document.addEventListener("click", function () {

  if (!firstClick) {
    firstClick = true;
    window.open(CLICK_AD, "_blank");
  }

}, { once: true });


/* =========================================
   DELAY IKLAN 5 DETIK
========================================= */

const DELAY_AD =
"https://omg10.com/4/11037669";

setTimeout(function () {

  const win = window.open("", "_blank");

  if (win) {
    setTimeout(function () {
      win.location.href = DELAY_AD;
    }, 300);
  }

}, 5000);
