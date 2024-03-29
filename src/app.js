/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard();
};

document.getElementById("button").addEventListener("click", generateCard);

window.setInterval(generateCard, 10000);

function generateCard() {
  console.log("function called");
  let cardValue = Math.floor(Math.random() * 13 + 1);
  let cardSuit = Math.floor(Math.random() * 4);
  let color = "red";

  if (cardSuit == 0) {
    cardSuit = "♦";
  } else if (cardSuit == 1) {
    cardSuit = "♥";
  } else if (cardSuit == 2) {
    cardSuit = "♠";
    color = "black";
  } else {
    cardSuit = "♣";
    color = "black";
  }

  let suit1 = document.getElementById("suit1");
  let suit2 = document.getElementById("suit2");
  suit1.innerHTML = cardSuit;
  suit2.innerHTML = cardSuit;
  suit1.style.color = color;
  suit2.style.color = color;

  if (cardValue == 1) cardValue = "A";
  else if (cardValue == 11) cardValue = "J";
  else if (cardValue == 12) cardValue = "Q";
  else if (cardValue == 13) cardValue = "K";

  let value = document.getElementById("value");
  value.innerHTML = cardValue;
  value.style.color = color;

  let height = document.getElementById("height").value;
  height = height.toString() + "px";
  let width = document.getElementById("width").value;
  width = width.toString() + "px";
  console.log(height);

  document.getElementById("card").style.width = width;
  document.getElementById("card").style.height = height;

  console.log(document.getElementById("card").style.height);
}
