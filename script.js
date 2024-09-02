let currentDisplayValue ='';
let firstNumber = null;
let lastNumber = null;
let operator = null;

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".calculator-numbers button");
const operatorButtons = document.querySelectorAll(".calculator-operators button");
const equalButton = document.querySelector('button[value="="]');
const clearButton = document.querySelector('button[value="C"]');





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






