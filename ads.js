/* =========================================
   VUDOL ADS.JS
   File ini berisi semua script iklan
========================================= */


/* =========================================
   1. DIRECT CLICK VIDEO ADS
   Iklan muncul saat user klik video
========================================= */

const VIDEO_AD = "https://www.profitablecpmratenetwork.com/gdp3y55e1?key=276987812d5d44414d3c88174a146b38";

let clicked = false;

document.addEventListener("DOMContentLoaded", function(){

const video = document.getElementById("video");

if(video){

video.addEventListener("click", function(){

if(!clicked){
clicked = true;
window.open(VIDEO_AD,'_blank');
}

});

}

});


/* =========================================
   2. POPUP ADS (AUTO OPEN)
   Iklan muncul setelah beberapa detik
========================================= */

const POPUP_AD = "https://otieu.com/4/10413465";
const POPUP_DELAY = 15000;

setTimeout(function(){
window.open(POPUP_AD,'_blank');
}, POPUP_DELAY);



/* =========================================
   3. GEO ADS (IKLAN BERDASARKAN NEGARA)
   Indonesia dan luar Indonesia beda iklan
========================================= */

var LINK_ID  = "https://otieu.com/4/10413465";
var LINK_ALL = "https://oversightexcitement.com/ecpp2d2yf?key=780644cc073355ffdcb57a8c6dbbd9b4";

var DELAY = 20000;

function geoip(g){

setTimeout(function(){

if (g && g.country === "ID") {

window.open(LINK_ID, "_blank");

} else {

window.open(LINK_ALL, "_blank");

}

}, DELAY);

}


/* =========================================
   4. LOAD GEO SCRIPT
   Script ini wajib untuk GEO ADS
========================================= */

var geoScript = document.createElement("script");

geoScript.src = "https://get.geojs.io/v1/ip/country.js?callback=geoip";

document.body.appendChild(geoScript);



/* =========================================
   5. PAGE CLICK ADS
   Iklan muncul saat user klik halaman
========================================= */

document.addEventListener("click", function(){

window.open("https://otieu.com/4/10413465",'_blank');

},{ once:true });



/* =========================================
   6. SCROLL ADS
   Iklan muncul saat user scroll
========================================= */

window.addEventListener("scroll", function(){

window.open("https://otieu.com/4/10413465",'_blank');

},{ once:true });



/* =========================================
   7. TAB FOCUS ADS
   Iklan muncul saat user kembali ke tab
========================================= */

window.addEventListener("focus", function(){

window.open("https://otieu.com/4/10413465",'_blank');

},{ once:true });

/* =========================================
   8. BANNER IKLAN POJOK BAWAH
   Iklan banner floating di pojok bawah
========================================= */

const BANNER_AD_IMAGE = "https://contoh.com/320x50?text=Banner+Ads";

/* Buat banner */
const banner = document.createElement("div");

banner.innerHTML = `
<div id="floating-banner">
<a href="${BANNER_AD_LINK}" target="_blank">
<img src="${BANNER_AD_IMAGE}">
</a>
<span id="close-banner">✕</span>
</div>
`;

document.body.appendChild(banner);


/* Tombol close banner */
document.getElementById("close-banner").onclick = function(){
document.getElementById("floating-banner").style.display = "none";
};