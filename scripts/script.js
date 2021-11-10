// JavaScript Document

var colorModeInput = document.querySelector("input");

colorModeInput.addEventListener('change', erisopmijgeklikt);

function erisopmijgeklikt() {
    console.log("darkmode checked");
  if( colorModeInput.checked ) {
    document.documentElement.classList.add("darkMode");
  } else {
    document.documentElement.classList.remove("darkMode");
  }
};