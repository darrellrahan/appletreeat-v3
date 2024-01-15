// header

const header = document.getElementById("header");
const navLinksDesktop = document.getElementsByClassName("nav-link-desktop");
const line = document.getElementById("header-line");
const cartBtn = document.getElementById("open-cart");

for (let i = 0; i < navLinksDesktop.length; i++) {
  navLinksDesktop[i].classList.add("after-bg-white");
}

window.addEventListener("scroll", () => {
  for (let i = 0; i < navLinksDesktop.length; i++) {
    navLinksDesktop[i].classList.remove(
      window.pageYOffset > 16 ? "after-bg-white" : "after-bg-black"
    );
    navLinksDesktop[i].classList.add(
      window.pageYOffset > 16 ? "after-bg-black" : "after-bg-white"
    );
  }
  line.style.backgroundColor = window.pageYOffset > 16 ? "#000" : "#FFF";
  cartBtn.style.borderColor = window.pageYOffset > 16 ? "#000" : "#FFF";
  cartBtn.style.color = window.pageYOffset > 16 ? "#000" : "#FFF";
  header.style.color = window.pageYOffset > 16 ? "#000" : "#FFF";
  header.style.backgroundColor =
    window.pageYOffset > 16 ? "#FFF" : "transparent";
  header.style.padding = window.pageYOffset > 16 ? "1rem 2rem" : "2rem";
  header.style.boxShadow =
    window.pageYOffset > 16
      ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
      : "0 0 #0000";
});

// navbar

const openNavbar = document.getElementById("open-navbar");
const closeNavbar = document.getElementById("close-navbar");
const navbarSection = document.getElementById("mobile-navbar");
const navLinks = document.getElementsByClassName("nav-link");

function closeNav() {
  document.body.style.overflowY = "auto";
  navbarSection.style.right = "150%";
  navbarSection.style.padding = "0px";
}

openNavbar.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  navbarSection.style.right = "0px";
  navbarSection.style.padding = "2rem";
});

closeNavbar.addEventListener("click", () => {
  document.body.style.overflowY = "auto";
  navbarSection.style.right = "150%";
  navbarSection.style.padding = "0px";
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    document.body.style.overflowY = "auto";
    navbarSection.style.right = "150%";
    navbarSection.style.padding = "0px";
  });
}

// carousel

const carousel = document.getElementById("products-carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slide = document.querySelector(".slide");

prevBtn.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft -= slideWidth + 32;
});

nextBtn.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft += slideWidth + 32;
});

// blog carousel

const blogCarousel = document.getElementById("blog-carousel");
const prevBtnBlog = document.getElementById("prev-blog");
const nextBtnBlog = document.getElementById("next-blog");
const slideBlog = document.querySelector(".blog-slide");

prevBtnBlog.addEventListener("click", () => {
  const slideWidth = slideBlog.clientWidth;
  blogCarousel.scrollLeft -= slideWidth + 32;
});

nextBtnBlog.addEventListener("click", () => {
  const slideWidth = slideBlog.clientWidth;
  blogCarousel.scrollLeft += slideWidth + 32;
});

// review carousel

const reviewCarousel = document.getElementById("review-carousel");
const prevBtnReview = document.getElementById("prev-review");
const nextBtnReview = document.getElementById("next-review");
const slideReview = document.querySelector(".review-slide");

prevBtnReview.addEventListener("click", () => {
  const slideWidth = slideReview.clientWidth;
  reviewCarousel.scrollLeft -= slideWidth + 48;
});

nextBtnReview.addEventListener("click", () => {
  const slideWidth = slideReview.clientWidth;
  reviewCarousel.scrollLeft += slideWidth + 48;
});

// faq

const question = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("answer");
const expandBtn = document.getElementsByClassName("expand-btn");
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    if (answer[i].classList.contains("height-0")) {
      expandBtn[i].classList.remove("ph-caret-down");
      expandBtn[i].classList.add("ph-caret-up");
      answer[i].classList.remove("height-0");
      answer[i].classList.add("faq-height");
      answer[i].style.paddingTop = "1.5rem";
    } else {
      expandBtn[i].classList.remove("ph-caret-up");
      expandBtn[i].classList.add("ph-caret-down");
      answer[i].classList.remove("faq-height");
      answer[i].classList.add("height-0");
      answer[i].style.paddingTop = "0px";
    }
  });
}

// to top
const toTop = document.getElementsByClassName("to-top");

for (let i = 0; i < toTop.length; i++) {
  toTop[i].addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// feature
const featureCard = document.getElementsByClassName("feature-card");
const featureTitle = document.getElementsByClassName("feature-title");
const featureBody = document.getElementsByClassName("feature-body");
const featureButton = document.getElementById("feature-button");

function otherCards() {
  for (let i = 0; i < featureCard.length; i++) {
    featureCard[i].classList.remove("col-span-2");
    featureCard[i].style.background =
      "linear-gradient(25deg,rgba(223, 168, 120, 0.25) 0%,rgba(255, 255, 255, 1) 40%,rgba(255, 255, 255, 1) 60%,rgba(223, 168, 120, 0.25) 100%)";
    featureTitle[i].style.color = "#DFA878";
    featureBody[i].style.color = "#7C7C7C";
  }
}

for (let i = 0; i < featureCard.length; i++) {
  featureCard[i].addEventListener("click", () => {
    otherCards();
    if (i === 0) {
      featureButton.style.background = "white";
      featureButton.style.color = "black";
    } else {
      featureButton.style.background = "#DFA878";
      featureButton.style.color = "white";
    }
    featureCard[i].classList.add("col-span-2");
    featureCard[i].style.background = "#DFA878";
    featureTitle[i].style.color = "white";
    featureBody[i].style.color = "white";
  });
}

// cart

const openCart = document.getElementById("open-cart");
const openCartProduct = document.getElementsByClassName("open-cart-product");
const closeCart = document.getElementById("close-cart");
const closeCartOverlay = document.getElementById("close-cart-overlay");
const cartSection = document.getElementById("cart");

openCart.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  cartSection.style.left = "0px";
});

for (let i = 0; i < openCartProduct.length; i++) {
  openCartProduct[i].addEventListener("click", () => {
    document.body.style.overflowY = "hidden";
    cartSection.style.left = "0px";
  });
}

closeCart.addEventListener("click", () => {
  document.body.style.overflowY = "auto";
  cartSection.style.left = "150%";
});

closeCartOverlay.addEventListener("click", () => {
  document.body.style.overflowY = "auto";
  cartSection.style.left = "150%";
});
