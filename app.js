const buttonHeight = 50;
const buttonWidth = 150;
const maxWidth = window.innerWidth - buttonWidth;
const maxHight = window.innerHeight - buttonHeight;

const yesButtonElement = document.getElementById("yes");
const noButtonElement = document.getElementById("bouncing");
const titleElement = document.querySelector("h1");
const firstGifElement = document.getElementById("dudu");
const yesGifElement = document.getElementById("yesGif");

function yesClicked() {
  titleElement.textContent =
    "Congratulations, you have a beautiful girlfriend like me.";
  yesButtonElement.style.display = "none";
  noButtonElement.style.display = "none";
  firstGifElement.style.display = "none";
  yesGifElement.style.display = "block";
}

function noHovered() {
  noButtonElement.style.left =
    Math.floor(Math.random() * (maxWidth + 1)) + "px";
  noButtonElement.style.top = Math.floor(Math.random() * (maxHight + 1)) + "px";
}

yesButtonElement.addEventListener("click", yesClicked);
noButtonElement.addEventListener("mousemove", noHovered);
