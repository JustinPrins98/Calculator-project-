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
function operate(a, o, b) {
    firstNumber == a;
    lastNumber == b;

    if (operator == "+") {
        return add(firstNumber, lastNumber);
    } else if (operator == "-") {
        return substract(firstNumber, lastNumber);
    } else if (operator == "*") {
        return multiply(firstNumber, lastNumber);
    } else if (operator == "/") {
        return divide(firstNumber, lastNumber);
    } else { "invalid syntax" };
    
};






