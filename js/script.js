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
