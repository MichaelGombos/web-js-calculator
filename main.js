//Grab calculator button container
const buttonGrid = document.getElementById("button-grid");
const evalDisplay = document.getElementById("evaluation-display");
let buttons = new Array();
console.log(buttonGrid);
//Give event listeners to every button
//TODO Unless button is AC or =, those give special commands
for (row of buttonGrid.children) {
  for (button of row.children) {
    //button inner text
    let text = button.innerText;
    button.addEventListener("click", () => {
      evaluateItem(text);
      //read expression then add to string
    });
    buttons.push(button);
  }
}

let currentExpression = " ";

function clearExpression() {
  currentExpression = " ";
  displayExpression(currentExpression);
}

function evaluateItem(item) {
  switch (item) {
    case "(":
      currentExpression += " (";
      displayExpression();
      return;
    case ")":
      currentExpression += ") ";
      displayExpression();
      return;
    case "AC":
      clearExpression();
      return;
    case "/":
      currentExpression += " / ";
      displayExpression();
      return;
    case "x":
      currentExpression += " * ";
      displayExpression();
      return;
    case "-":
      currentExpression += " - ";
      displayExpression();
      return;
    case "+":
      currentExpression += " + ";
      displayExpression();
      return;
    case "=":
      console.log("equals: " + currentExpression);
      currentExpression = eval(currentExpression);
      displayExpression();
      return;
  }
  currentExpression += item;
  displayExpression();
}

function displayExpression() {
  console.log(currentExpression);
  evalDisplay.innerText = currentExpression;
}
//Every button added to an object, name value set to inner html of said button element
