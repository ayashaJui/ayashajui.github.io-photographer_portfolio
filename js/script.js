//Toggle Active State...
const navState = document.querySelectorAll(".nav"),
  current = document.querySelector(".nav-filter");

for (let i = 0; i < navState.length; i++) {
  navState[i].addEventListener("click", (e) => {
    current.querySelector(".uk-active").classList.remove("uk-active");
    e.target.parentElement.classList.add("uk-active");
  });
}

//Change Content According to click...
const logo = document.querySelector(".main-logo"),
  carousel = document.querySelector("#carousel"),
  parallex = document.querySelector(".parallex-header"),
  main = document.querySelector(".main"),
  contact = document.querySelector(".contact-content"),
  portfolio = document.querySelector(".portfolio-content"),
  footer = document.querySelector("#footer-content");

contact.style.display = "none";
portfolio.style.display = "none";

document.querySelector("#home").addEventListener("click", homeState);
document.querySelector("#contact").addEventListener("click", contactState);
document
  .querySelector("#contactParallex")
  .addEventListener("click", contactState);
document.querySelector("#portfolio").addEventListener("click", portfolioState);

function homeState(e) {
  logo.style.display = "block";
  carousel.style.display = "block";
  parallex.style.display = "block";
  contact.style.display = "none";
  portfolio.style.display = "none";
  footer.style.display = "block";
  e.preventDefault();
}
function contactState(e) {
  main.style.backgroundColor = "#F8F8F8";
  logo.style.display = "none";
  carousel.style.display = "none";
  parallex.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "block";
  footer.style.display = "block";
  e.preventDefault();
}
function portfolioState(e) {
  logo.style.display = "none";
  carousel.style.display = "none";
  parallex.style.display = "none";
  contact.style.display = "none";
  portfolio.style.display = "block";
  footer.style.display = "none";
  e.preventDefault();
}

//Form validation
document.querySelector("#send").addEventListener("click", formValidate);
function formValidate(e) {
  const name = document.querySelector("#name").value,
    email = document.querySelector("#email").value,
    subject = document.querySelector("#subject").value,
    message = document.querySelector("#message").value;
  if (name === "" || email === "" || subject === "" || message === "") {
    showAlert("Please fill all fields.", "uk-alert uk-alert-danger");
  } else {
    showAlert("Message Sent. Thank You.", "uk-alert uk-alert-success");
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#subject").value = "";
    document.querySelector("#message").value = "";
  }
  e.preventDefault();
}
function showAlert(msg, className) {
  const div = document.createElement("div");

  div.className = className;
  div.appendChild(document.createTextNode(msg));

  const parent = document.querySelector(".contact-content");
  const child = document.querySelector(".msg-form");
  parent.insertBefore(div, child);
  setTimeout(() => {
    clearAlert();
  }, 3000);
}
function clearAlert() {
  const currentAlert = document.querySelector(".uk-alert");

  if (current) {
    currentAlert.remove();
  }
}
