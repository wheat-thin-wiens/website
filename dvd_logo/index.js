const body = document.getElementById("body");
const menu = document.getElementById("menu");
const homeLink = document.getElementById("homeLink");
const header = document.getElementById("header");
const startButton = document.getElementById("startButton");

const bounceScreen = document.createElement("canvas");
bounceScreen.id = "bounceScreen";

const ctx = bounceScreen.getContext("2d");
const logoWidth = 100;
const logoHeight = 40;

const logo = new Image();
logo.src = "assets/logo.png";
logo.id = "logo";

let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

let startX = Math.floor(Math.random() * winWidth);
let startY = Math.floor(Math.random() * winHeight);
let x = startX;
let y = startY;
let dx = 2;
let dy = 2;
let running = false;

startButton.onclick = function() { start() }

function start() {
  // document.getElementById("menu").remove();
  // document.getElementById("homeLink").remove();
  // body.appendChild(document.createElement("canvas"));
  menu.remove();
  homeLink.remove();
  body.appendChild(bounceScreen);

  bounceScreen.width = winWidth;
  bounceScreen.height = winHeight;
  
  running = true;

  moveLogo();
}

function moveLogo() {
  ctx.clearRect(0, 0, bounceScreen.width, bounceScreen.height);
  ctx.drawImage(logo, x, y, logoWidth, logoHeight);

  x += dx;
  y += dy;

  if (x + logoWidth > bounceScreen.width || x < 0) {
    dx = -dx;
  }

  if (y + logoHeight > bounceScreen.height || y < 0) {
    dy = -dy;
  }
  /*
  || is the 'or' operator in JS.
  These if statements are checking to see if the position of the logo
  is greater or less than the width of the screen, and reversing the
  direction of the logo if the logo hits the edge of the screen.
  */

  if (running == true) {
    requestAnimationFrame(moveLogo);
  }
  // requestAnimationFrame(moveLogo);
  /*
  The requestAnimationFrame() method takes a callback function as its only argument.
  The method uses this callback to update the animation.
  */
}

function showMenu() {
  bounceScreen.remove();
  logo.remove();

  const newMenu = document.createElement("div");
  newMenu.id = 'menu';

  const newHeader = document.createElement("h1");
  newHeader.id = "header";
  newHeader.innerText = "dvd logo";

  const newStart = document.createElement("button");
  newStart.id = "startButton";
  newStart.type = "button";
  newStart.innerText = "start";
  newStart.onclick = function() { start() }

  body.appendChild(newMenu);
  newMenu.appendChild(newHeader);
  newMenu.appendChild(newStart);
}

document.addEventListener("keypress", (event) => {
  if (event.key === ' ') {
    switch (running) {
      case true:
        running = false;
        // showMenu();
        break;
      case false:
        running = true;
        moveLogo();
        break
    }
  }
})

window.addEventListener('load', (event) => {
  console.log("Page loaded.");
})
