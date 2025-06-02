import generateJokes from "./generateJoke.js";
import "./styles/style.css";
import laughingCat from "./assets/kitty.svg";

// const laughImg = document.getElementById("catImg");

// laughImg.src = laughingCat;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJokes);

generateJokes();
