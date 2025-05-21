let firstvalue, secondvalue, operator, result;

const outputbox = document.querySelector("input");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".opr");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const allClear = document.querySelector(".All-clear");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (outputbox.value === "0") {
      outputbox.value = number.innerText;
    } else {
      outputbox.value += number.innerText;
    }
  });
});

operators.forEach((opr) => {
  opr.addEventListener("click", () => {
    firstvalue = parseFloat(outputbox.value);
    operator = opr.innerText;
    outputbox.value = "0";
  });
});

equal.addEventListener("click", () => {
  if (operator === null || outputbox.value === "") return;

  secondvalue = parseFloat(outputbox.value);

  switch (operator) {
    case "+":
      result = firstvalue + secondvalue;
      break;

    case "-":
      result = firstvalue - secondvalue;
      break;

    case "*":
      result = firstvalue * secondvalue;
      break;

    case "/":
      result = secondvalue !== 0 ? firstvalue / secondvalue : "Error";
      break;

       case "%":
            result = secondvalue !== 0 ? firstvalue % secondvalue : "Error";
            break;
            
    default:
      result = secondvalue;
  }

  outputbox.value = result;
}); 

decimal.addEventListener("click", () => {
  if (!outputbox.value.includes(".")) {
    outputbox.value += ".";
  }
});
allClear.addEventListener("click", () => {
  outputbox.value = "0";
  firstvalue = null;
  secondvalue = null;
  operator = null;
});

clear.addEventListener("click", () => {
    if (outputbox.value.length > 1) {
        outputbox.value = outputbox.value.slice(0, -1);
    } else {
        outputbox.value = "0"; 
    }
});

