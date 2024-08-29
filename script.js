let firstNumber;
let lastNumber;
let operator;






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






