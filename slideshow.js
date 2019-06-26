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

function autoSlides(slides, slidesType) {
  //play slides automatically when page loads, reset timer once user changes slides
  var timer;
  window.addEventListener("load", function(){
    slides.showSlides(slides.currSlideIndex);
    timer = setInterval(function(){slides.plusSlides(1)}, waitTime);
  })

  arrows = document.getElementsByClassName(slidesType + "-arrow");
  dots = document.getElementsByClassName(slidesType + "-dot");
  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function(){
    clearInterval(timer);
    timer = setInterval(function(){slides.plusSlides(1)}, waitTime);
    })
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function(){
    clearInterval(timer);
    timer = setInterval(function(){slides.plusSlides(1)}, waitTime);
    })
  }
}

var waitTime = 7000;

var wushuDots = document.getElementsByClassName("wushu-dot");
var wushuImages = document.getElementsByClassName("wushu-img");
const wushuSlides = new slideShow(wushuImages, wushuDots);
wushuSlides.showSlides(0);
autoSlides(wushuSlides, "wushu");

var travelDots = document.getElementsByClassName("travel-dot");
var travelImages = document.getElementsByClassName("travel-img");
const travelSlides = new slideShow(travelImages, travelDots);
travelSlides.showSlides(0);
autoSlides(travelSlides, "travel")

var musicDots = document.getElementsByClassName("music-dot");
var musicImages = document.getElementsByClassName("music-img");
const musicSlides = new slideShow(musicImages, musicDots);
musicSlides.showSlides(0);
autoSlides(musicSlides, "music");
