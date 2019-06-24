class slideShow {

  constructor(pics, dots) {
    this.pics = pics;
    this.dots = dots;
    this.currSlideIndex = 0;
  }

  plusSlides(n) {
    this.showSlides(this.currSlideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(n);
  }

  showSlides(n) {
    this.currSlideIndex = n;
    if (n >= this.pics.length) {
      this.currSlideIndex = 0;
    }
    if (n < 0) {
      this.currSlideIndex = this.pics.length - 1;
    }
    for (var i = 0; i < this.pics.length; i++) {
      this.pics[i].style.display = "none";
    }
    for (var i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(" active", "");
    }
    this.pics[this.currSlideIndex].style.display = "block";
    this.dots[this.currSlideIndex].className += " active";
  }
}

var wushuDots = document.getElementsByClassName("wushu-dot");
var wushuImages = document.getElementsByClassName("wushu-img");
const wushuSlides = new slideShow(wushuImages, wushuDots);
wushuSlides.showSlides(0);
var wushuTimer;
window.addEventListener("load", function(){
  wushuSlides.showSlides(wushuSlides.currSlideIndex);
  wushuTimer = setInterval(function(){wushuSlides.plusSlides(1)}, 5000);
})

var travelDots = document.getElementsByClassName("travel-dot");
var travelImages = document.getElementsByClassName("travel-img");
const travelSlides = new slideShow(travelImages, travelDots);
travelSlides.showSlides(0);
var travelTimer;
window.addEventListener("load", function(){
  travelSlides.showSlides(travelSlides.currSlideIndex);
  travelTimer = setInterval(function(){travelSlides.plusSlides(1)}, 5000);
})

var musicDots = document.getElementsByClassName("music-dot");
var musicImages = document.getElementsByClassName("music-img");
const musicSlides = new slideShow(musicImages, musicDots);
musicSlides.showSlides(0);
var musicTimer;
window.addEventListener("load", function(){
  musicSlides.showSlides(musicSlides.currSlideIndex);
  musicTimer = setInterval(function(){musicSlides.plusSlides(1)}, 5000);
})
