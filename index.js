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
