//Grab calculator button container
const buttonGrid = document.getElementById("button-grid");
let buttons = new Array();
console.log(buttonGrid);
//Give event listeners to every button
//TODO Unless button is AC or =, those give special commands
for (row of buttonGrid.children) {
  for (button of row.children) {
    //button inner text
    let text = button.innerText;
    button.addEventListener("click", () => {
      button.text = text;
      console.log(button.text);
    });
    buttons.push(button);
  }
}

let currentExpression = "";

function addToExpression(item) {}

function checkItem(item) {
  switch (item) {
    case "(":
      return " (";
    case ")":
      return ") ";
    case "AC":
      //function to clear que
      break;
    case "/":
      return " / ";
    case "x":
      return " x ";
    case "-":
      return " - ";
    case "+":
      return " + ";
    case "=":
      //function to evaluate expression
      break;
  }
  return item;
}
//Every button added to an object, name value set to inner html of said button element
