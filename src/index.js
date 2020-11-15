import "./index.scss";

const hamburgerMenuButton = document.querySelector(".hamburger");
const headerElement = document.querySelector("header");

hamburgerMenuButton.addEventListener("click", () => {
  headerElement.classList.toggle("open");
});
