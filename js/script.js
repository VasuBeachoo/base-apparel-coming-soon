const textSection = document.querySelector(".text-section");
const imgSection = document.querySelector(".img-section");
let logo = document.querySelector(".logo");
let heroImg = document.querySelector(".hero-img");

const newLogo = document.createElement("img");
const newHeroImg = document.createElement("img");

function removeImages() {
  logo = document.querySelector(".logo");
  heroImg = document.querySelector(".hero-img");
  if (logo) logo.remove();
  if (heroImg) heroImg.remove();
}

function displayDesktop() {
  removeImages();
  newLogo.src = "./images/logo.svg";
  newLogo.className = "logo logo-desktop";
  textSection.append(newLogo);
  newHeroImg.src = "./images/hero-desktop.jpg";
  newHeroImg.alt = "hero-desktop";
  newHeroImg.className = "hero-img hero-img-desktop";
  imgSection.append(newHeroImg);
}

function displayMobile() {
  removeImages();
  newLogo.src = "./images/logo.svg";
  newLogo.className = "logo logo-mobile";
  imgSection.append(newLogo);
  newHeroImg.src = "./images/hero-mobile.jpg";
  newHeroImg.alt = "hero-mobile";
  newHeroImg.className = "hero-img hero-img-mobile";
  newHeroImg.width = document.body.scrollWidth;
  imgSection.append(newHeroImg);
}

function handleResize() {
  if (window.innerWidth <= 1050) displayMobile();
  else displayDesktop();
}

window.addEventListener("resize", handleResize);

handleResize(); // Initally determine which website version to display

const formContainer = document.querySelector(".form-container");
const emailForm = document.querySelector(".email-form");
const emailInput = document.querySelector(".email-input");
const errorMsgContainer = document.querySelector(".error-msg-container");

const errorMsg = document.createElement("p");
errorMsg.className = "error-msg regular-text soft-red";

function displayErrorMsg() {
  errorMsgContainer.append(errorMsg);
}

const errorIcon = document.createElement("img");
errorIcon.src = "./images/icon-error.svg";
errorIcon.alt = "icon-error";
errorIcon.className = "error-icon";

function displayErrorIcon() {
  formContainer.append(errorIcon);
}

emailForm.addEventListener("submit", (e) => {
  if (emailInput.value === "") {
    errorMsg.innerText = "Uh oh! It looks like you forgot to add your email";
    e.preventDefault();
    displayErrorMsg();
    displayErrorIcon();
  }
  if (!emailInput.validity.valid) {
    errorMsg.innerText = "Please provide a valid email";
    e.preventDefault();
    displayErrorMsg();
    displayErrorIcon();
  }
});
