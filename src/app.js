/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  function RamdomIndex(array) {
    let ArrayIndex = Math.floor(Math.random() * array.length);
    return array[ArrayIndex] + " ";
  }

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  document.querySelector("#excuse").innerHTML =
    RamdomIndex(who) +
    RamdomIndex(action) +
    RamdomIndex(what) +
    RamdomIndex(when);

  let excuseButton = document.querySelector("#excuseGenerator");

  excuseButton.addEventListener("click", () => {
    let newExcuse =
      RamdomIndex(who) +
      RamdomIndex(action) +
      RamdomIndex(what) +
      RamdomIndex(when);
    document.querySelector("#excuse").innerHTML = newExcuse;
  });
};
