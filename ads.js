/*************************************************
 KONFIGURASI IKLAN
**************************************************/

// 👉 GANTI DENGAN LINK IKLAN KAMU
const ADS = {
  main: "https://omg10.com/4/10902178",   // iklan utama (klik pertama)
  back: "https://example.com/back",       // opsional: saat user balik
  second: "https://example.com/second"    // opsional: klik kedua
};

/*************************************************
 STATE USER
**************************************************/

// cek apakah iklan sudah pernah tampil
let adShown = localStorage.getItem("adShown");

/*************************************************
 ELEMEN
**************************************************/

const layer = document.getElementById("clickLayer");
const btn = document.getElementById("playBtn");

/*************************************************
 1. IKLAN KLIK PERTAMA (PALING PENTING)
**************************************************/

btn.addEventListener("click", () => {

  // hanya tampil 1x (biar tidak ganggu user)
  if (!adShown) {
    window.open(ADS.main, "_blank");

    // simpan status
    localStorage.setItem("adShown", "true");
  }

  // hilangkan layer → user bisa akses video
  layer.style.display = "none";
});


/*************************************************
 2. IKLAN BACK (OPSIONAL - AGAK AGRESIF)
**************************************************/

// Saat user kembali ke tab
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {

    if (!sessionStorage.getItem("backAdShown")) {
      sessionStorage.setItem("backAdShown", "true");

      // buka iklan kedua
      window.open(ADS.back, "_blank");
    }

  }
});


/*************************************************
 3. IKLAN KLIK KEDUA (OPSIONAL)
**************************************************/

let clickCount = 0;

document.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 2 && ADS.second !== "") {
    window.open(ADS.second, "_blank");
  }
});
