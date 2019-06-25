class socialLink {
  constructor(imgID, frontImg, backImg) {
    this.imgID = imgID;
    this.frontImg = frontImg;
    this.backImg = backImg;
  }

  onHover() {
    $(this.imgID).attr('src', this.backImg);
  }

  offHover() {
    $(this.imgID).attr('src', this.frontImg);
  }
}

const linkedin = new socialLink("#linkedin-img", "imgs/linkedin.png", "imgs/linkedin-hover.png");
const instagram = new socialLink("#instagram-img", "imgs/instagram.png", "imgs/instagram-hover.png");
const github = new socialLink("#github-img", "imgs/github.png", "imgs/github-hover.png");
const email = new socialLink("#email-img", "imgs/email.png", "imgs/email-hover.png");


//toggle drop-down menu for mobile
function toggleMenu() {
  console.log("toggled menu");
  var currDisplay = document.getElementById("main-menu").style.display;
  if (currDisplay == "flex") {
    document.getElementById("main-menu").style.display = "none";
  } else {
    document.getElementById("main-menu").style.display = "flex";
  }
}

window.addEventListener("load", function(){
  document.getElementById("main-menu").style.display = "none";
  // console.log("glithc");
  // if (document.getElementById("main-menu").style.display != "none"){
  //   document.getElementById("main-menu").style.display = "none";
  // }
})
