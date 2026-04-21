const ADS = {
  main: "https://omg10.com/4/10902178",
  back: "https://omg10.com/4/10830632"
};

const btn = document.getElementById("playBtn");
const overlay = document.getElementById("overlay");
const video = document.getElementById("video");

let shown = false;

btn.addEventListener("click", () => {

  if (!shown) {
    window.open(ADS.main, "_blank");
    shown = true;
  }

  overlay.style.display = "none";
  video.play();
});

window.addEventListener("focus", () => {
  if (shown) {
    setTimeout(() => {
      window.open(ADS.back, "_blank");
    }, 1500);
  }
});
