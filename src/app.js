/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();

  function RamdomIndex(array) {
    let ArrayIndex = Math.floor(Math.random() * array.length);
    return array[ArrayIndex] + " ";
  }
  function generateExcuse() {
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

    return (
      RamdomIndex(who) +
      RamdomIndex(action) +
      RamdomIndex(what) +
      RamdomIndex(when)
    );
  }
};
