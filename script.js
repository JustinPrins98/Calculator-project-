let currentDisplayValue = '';
let firstNumber = null;
let lastNumber = null;
let operator = null;
let waitingForSecondNumber = false;

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".calculator-numbers button:not([value='backspace'])");
const operatorButtons = document.querySelectorAll(".calculator-operators button");
const equalButton = document.querySelector('button[value="="]');
const clearButton = document.querySelector('button[value="C"]');
const decimalButton = document.querySelector('button[value="."]');
const backspaceButton = document.querySelector('button[value="backspace"]');

// Buttons and events

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === ".") {
            if (currentDisplayValue.includes(".")) {
                return;
            }
        }

        if (waitingForSecondNumber) {
            currentDisplayValue = value;
            waitingForSecondNumber = false;
        } else {
            currentDisplayValue = currentDisplayValue == '' ? value : currentDisplayValue + value;
        }

        display.textContent = currentDisplayValue;
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(currentDisplayValue);
        } else if (operator) {
            const result = operate(operator, firstNumber, parseFloat(currentDisplayValue));
            display.textContent = result;
            firstNumber = result;
        }

        operator = button.textContent;
        waitingForSecondNumber = true;
    })
});

equalButton.addEventListener('click', () => {
    if (operator && firstNumber !== null) {
        const result = operate(operator, firstNumber, parseFloat(currentDisplayValue));
        display.textContent = result;
        firstNumber = result;
        operator = null;
        waitingForSecondNumber = true;
    }
});

clearButton.addEventListener('click', () => {
    currentDisplayValue = '';
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
    display.textContent = '0';
});

backspaceButton.addEventListener('click', () => {
    if (currentDisplayValue.length > 0) {
        // Remove the last character from the current display value
        currentDisplayValue = currentDisplayValue.slice(0, -1);
        // Update the display
        display.textContent = currentDisplayValue || '0'; // Show '0' if empty
    }
});



// Math fucntions
function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

// Takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, firstNumber, lastNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, lastNumber);
        case "-":
            return substract(firstNumber, lastNumber);
        case "*":
            return multiply(firstNumber, lastNumber);
        case "/":
            return divide(firstNumber, lastNumber);
        default:
            return "invalid operator";
    }


};






