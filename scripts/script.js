// JavaScript Document

var toggle = document.querySelector("input");

toggle.addEventListener('change', switchMode);

function switchMode() {
    
  if( toggle.checked ) {
      console.log("lightmode checked")
    document.documentElement.classList.add("darkMode");
  } else {
      console.log("darkmode checked");
    document.documentElement.classList.remove("darkMode");
  }
};