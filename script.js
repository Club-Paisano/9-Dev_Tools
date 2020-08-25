//jshint esversion: 6
/*
Author: Ti Tonito
This page leads the user through a series of actions that requires that they
interact with the browser to do

Future Development:
-Change the api call to one where i can show the user what data we actually got
-Refactor out the correct string to a variable
-Make it so that when you get close to the number in q3, there are different prompts such as "getting warmer, cold.etc"

*/


const initPage = ()  => {

  //Add event listeners to all buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => button.addEventListener("click",buttonClicked));

  //Add event listener to the input on question 3
  const input = document.querySelector("input[data-q=q3]");
  input.addEventListener("change", q3Answer);

};

const buttonClicked = (e) => {
  //Grab which ever button was clicked's question number
  let qNumber =e.target.dataset.q;
  switch (qNumber) {
    case "q1":
      q1Answer();
      break;
    case "q2":
      q2Answer();
      break;
    case "q4":
      q4Answer();
      break;
    case "hint":
      q2Hint();
      break;
    default:

  }


};

const q1Answer = () => {
  //grab what the user has put in the input box
  const q1Input = document.querySelector("input[data-q=q1]");
  //Check if it's equal to the placeholder value capitalized and if not log an error
  if(q1Input.value === q1Input.placeholder.toUpperCase()) console.log("%c %s Correct Answer!","color: green", "✅");
  else console.error("Incorrect value entered!");
};

const q2Answer = () => {
  //grab what the user has put in the input box
  const q2Input = document.querySelector("input[data-q=q2]");
  //see if the value is equal to "mary" and if not give an console.error();
  if(q2Input.value.toLowerCase().includes("mary")) console.log("%c %s Correct Answer!","color: green", "✅");
  else console.error("Incorrect Answer!");

};

const q2Hint = () => {
  //If the user asked for a hint on q2 use console.info
  console.info("ℹ️ "+"Read the question again and think who's father is it?");
};

const q3Answer = () => {
  const GUESSED_NUMBER = 6;
  //Grab value from the number input
  const q3input = document.querySelector("input[data-q=q3]");

  //if the number if is equal to the number console log the correct answer
  //If the number is within 2 numbers of the guessed number show message "You're REALLY Hot"
  //If the number is within 3 of the number say "you're getting hotter"
  //Else say nope
  //Fix this
  // if(parseInt(q3input.value) === GUESSED_NUMBER) console.log("%c %s Correct Answer!","color: green", "✅");
  // if(GUESSED_NUMBER-parseInt(q3input.value)>= -2 && GUESSED_NUMBER-parseInt(q3input.value) <= 2) console.warn("You're REALLY hot! 🔥🔥");
  // if(GUESSED_NUMBER-parseInt(q3input.value)=== -3 && GUESSED_NUMBER-parseInt(q3input.value) === 3) console.warn("You're getting warmer...");
  // else console.warn("Cold.");

  if(parseInt(q3input.value) === GUESSED_NUMBER) {
    console.log("%c %s Correct Answer!","color: green", "✅");
  } else
    console.warn("That is not the number");



};
const q4Answer = () => {
  console.time("Getting data...");
  fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
  .then(response => response.json())
  .then(data => console.timeEnd("Getting data..."));

};

initPage();
