const yesButtonElement = document.getElementById("yes");
const noButtonElement = document.getElementById("bouncing");
const titleElement = document.querySelector("h1");

const buttonHeight = 50;
const buttonWidth = 150;
const maxWidth = window.innerWidth - buttonWidth;
const maxHight = window.innerHeight - buttonHeight;

yesButtonElement.addEventListener("click", yesClicked);
noButtonElement.addEventListener("mouseover", noHovered);

function yesClicked() {
  titleElement.textContent =
    "Congratulations, you have a beautiful girlfriend like me.";
  yesButtonElement.style.display = "none";
  noButtonElement.style.display = "none";
}

function noHovered() {
  noButtonElement.style.left =
    Math.floor(Math.random()) * (maxWidth + 1) + "px";
}
