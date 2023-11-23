function displayMtsText() {
  var text = document.getElementById("mts");
  text.classList.toggle("block");
}

function displayAksalText() {
  var text = document.getElementById("aksal");
  text.classList.toggle("block");
}

function displayNitroText() {
  var text = document.getElementById("nitro");
  text.classList.toggle("block");
}

function displayKryptonText() {
  var text = document.getElementById("krypton");
  text.classList.toggle("block");
}

/* window.addEventListener("load", welcomeFunc);
function welcomeFunc() {
  var name = prompt("What is your name? ");
  var firstLetter = name.slice(0, 1);
  var rest = name.slice(1, name.length);
  firstLetter = firstLetter.toUpperCase();
  rest = rest.toLowerCase();
  alert(`Welcome ${firstLetter}` + `${rest}`);
}*/
