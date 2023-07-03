function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// JavaScript code here
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  var fixedNav = document.querySelector(".fixednav"); // mobiilissa dropshadow pois
  fixedNav.style.filter = "none"; // mobiilissa dropshadow pois
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
const osWrappers = document.getElementsByClassName("os__wrapper");

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const fade1 = document.getElementById("fade1");
const fade2 = document.getElementById("fade2");
const fade3 = document.getElementById("fade3");
const fade4 = document.getElementById("fade4");

const fade5 = document.getElementById("fade5");
const fade6 = document.getElementById("fade6");
const fade7 = document.getElementById("fade7");
const fade8 = document.getElementById("fade8");

const fadelist = [fade1, fade2, fade3, fade4, fade5, fade6, fade7, fade8];
console.log(fade1);
window.addEventListener("scroll", () => {
  const windowHeight = innerHeight;
  for (fade of fadelist) {
    if (
      fade.getBoundingClientRect().top > windowHeight / 4 &&
      fade.getBoundingClientRect().top < windowHeight / 2.5
    ) {
      fade.classList.add("fade-on");
    } else fade.classList.remove("fade-on");
  }
});

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Miksi tämä on tärkeää?
const kulttuurit = [
  './Pictures/Kulttuuri.png',
  './Pictures/Group12.png'
];

const images = document.getElementsByClassName("kulttuurikuvat");
let currentIndex = 0;

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 2;
    images[i].src = kulttuurit[currentIndex];
  })};

const identiteetit = [
  './Pictures/identiteetti1.png',
  './Pictures/identiteetti2.png'
];

const images2 = document.getElementsByClassName('identiteettikuvat');
let index = 0;

for (let j = 0; j < images2.length; j++) {
  images2[j].addEventListener('click', () => {
    index = (index + 1) % 2;
    images2[j].src = identiteetit[index];
  })};

const vuorovaikutukset = [
  './Pictures/vuorovaikutus1.png',
  './Pictures/vuorovaikutus2.png'
];

const images3 = document.getElementsByClassName('vuorovaikutuskuvat');
let ind = 0;

for (let k = 0; k < images3.length; k++) {
  images3[k].addEventListener('click', () => {
    ind = (ind + 1) % 2;
    images3[k].src = vuorovaikutukset[ind];
  });
}

// lue lisää

const fromtop1 = document.querySelector("#slide1").offsetTop;
const fromtop2 = document.querySelector("#slide2").offsetTop;
const fromtop3 = document.querySelector("#slide3").offsetTop;
const fromtop4 = document.querySelector("#slide4").offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > fromtop1 - window.innerHeight / 10) {
    document.querySelector("#slide1").classList.add("linkki_o");
  }
  if (window.pageYOffset > fromtop2 - window.innerHeight / 10) {
    document.querySelector("#slide2").classList.add("linkki_v");
  }
  if (window.pageYOffset > fromtop3 - window.innerHeight / 10) {
    document.querySelector("#slide3").classList.add("linkki_o");
  }
  if (window.pageYOffset > fromtop4 - window.innerHeight / 10) {
    document.querySelector("#slide4").classList.add("linkki_v");
  }
});

let slideIndex = 1;
showSlides(slideIndex);


