// numbers buttons
const numbers = document.querySelectorAll(".number");
// operands buttons, eg: (+, -, x, /)
const operands = document.querySelectorAll(".operand");

// the first three boxes
const resultBox = document.querySelector(".result");
const inputBox = document.querySelector(".input");
const historyBox = document.querySelector(".history");

// clear & equal buttons
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector("#equal");

// operand buttons
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const divideBtn = document.querySelector("#division");
const multiplyBtn = document.querySelector("#multiply");

// current input

let currentInput;
let nextInput;
let currentOperation;

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    console.log(parseInt(num.textContent));
    inputBox.innerText += num.textContent;
  });
});

// operands.forEach((operand) => {
//   operand.addEventListener("click", () => {
//     console.log(operand.textContent);
//     inputBox.innerText += operand.textContent;
//   });
// });

plusBtn.addEventListener("click", () => {
  currentInput = parseInt(inputBox.innerText);
  currentOperation = "+";
  historyBox.innerText = inputBox.innerText + "+";
  inputBox.innerText = "";
  console.log(currentInput);
});

minusBtn.addEventListener("click", () => {
  currentInput = parseInt(inputBox.innerText);
  currentOperation = "-";
  historyBox.innerText = inputBox.innerText + "-";
  inputBox.innerText = "";
  console.log(currentInput);
});

multiplyBtn.addEventListener("click", () => {
  currentInput = parseInt(inputBox.innerText);
  currentOperation = "*";
  historyBox.innerHTML = inputBox.innerHTML + "&times;";
  inputBox.innerText = "";
  console.log(currentInput);
});

divideBtn.addEventListener("click", () => {
  currentInput = parseInt(inputBox.innerText);
  currentOperation = "/";
  historyBox.innerHTML = inputBox.innerHTML + "&#247;";
  inputBox.innerText = "";
  console.log(currentInput);
});

equalBtn.addEventListener("click", () => {
  let result;
  historyBox.innerText += inputBox.innerText;
  nextInput = parseInt(inputBox.innerText);
  switch (currentOperation) {
    case "+":
      result = currentInput + nextInput;
      break;
    case "-":
      result = currentInput - nextInput;
      break;
    case "*":
      result = currentInput * nextInput;
      break;
    case "/":
      result = currentInput / nextInput;
      break;

    default:
      break;
  }
  inputBox.innerText = result;
  currentInput = result;
  console.log(result);
});

clearBtn.addEventListener("click", () => {
  inputBox.innerText = "";
  historyBox.innerText = "";
});

// code for theme options
const r = document.querySelector(":root"); // get the root element

// Get the styles (properties and values) for the root
const rs = getComputedStyle(r);

// A function to handle theme one
function turnOnThemeOne() {
  r.style.setProperty("--background", "#e9ecef");
  r.style.setProperty("--btns", "#dee2e6");
  r.style.setProperty("--btnText", "#6c757d");
  r.style.setProperty("--boxText", "#6c757d");
  r.style.setProperty("--lightHistory", "#adb5bd");
  r.style.setProperty("--lightInput", "#ced4da");
  r.style.setProperty("--hover", "#adb5bd");
}

// A function to handle theme two
function turnOnThemeTwo() {
  r.style.setProperty("--background", "#191528");
  r.style.setProperty("--btns", "#110E1B");
  r.style.setProperty("--btnText", "#7c162e");
  r.style.setProperty("--boxText", "#fff");
  r.style.setProperty("--lightHistory", "#5c162e");
  r.style.setProperty("--lightInput", "#3c162f");
  r.style.setProperty("--hover", "#3c162f");
}

// A function to handle theme three
function turnOnThemeThree() {
  r.style.setProperty("--background", "#7f5539");
  r.style.setProperty("--btns", "#9c6644");
  r.style.setProperty("--btnText", "#ddb892");
  r.style.setProperty("--boxText", "#9c6644");
  r.style.setProperty("--lightHistory", "#e6ccb2");
  r.style.setProperty("--lightInput", "#ede0d4");
  r.style.setProperty("--hover", "#e6ccb2");
}

const themeDropdown = document.querySelector("#theme");

themeDropdown.addEventListener("change", (event) => {
  console.log(event.target.value);
  switch (event.target.value) {
    case "1":
      turnOnThemeOne();
      break;
    case "2":
      turnOnThemeTwo();
      break;
    case "3":
      turnOnThemeThree();
      break;

    default:
      break;
  }
});
