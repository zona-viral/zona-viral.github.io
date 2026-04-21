const ADS = {
  main: "https://omg10.com/4/10902178",
  back: "https://omg10.com/4/10830632"
};

const btn = document.getElementById("playBtn");
const video = document.getElementById("video");

let mainShown = false;
let backShown = false;

/* PLAY BUTTON */
btn?.addEventListener("click", () => {

  if (!mainShown) {
    window.open(ADS.main, "_blank");
    mainShown = true;
  }

  video?.play();
});

/* BACK AD */
window.addEventListener("focus", () => {

  if (mainShown && !backShown) {
    backShown = true;

    setTimeout(() => {
      window.open(ADS.back, "_blank");
    }, 1500);
  }

});
