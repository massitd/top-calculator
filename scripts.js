const display = document.querySelector("#display");

let activeNumber = 0;
let lastNumber = 0;
let operator = "";

function operate(x, a, b) {
    if (x == "add") {
       return add(a, b);
    };
    if (x == "subtract") {
        return subtract(a, b);
    };
    if (x == "multiply") {
        return multiply(a, b);
    };
    if (x == "divide") {
        return divide(a, b);
    };
};

display.textContent = activeNumber;

// operator functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

// number buttons

let button1 = document.getElementById("one");
button1.addEventListener("click", () => {
    lastNumber = activeNumber;
    activeNumber = 1;
    display.textContent = activeNumber;
})

let button2 = document.getElementById("two");
button2.addEventListener("click", () => {
    lastNumber = activeNumber;
    activeNumber = 2;
    display.textContent = activeNumber;
})

let button3 = document.getElementById("three");
button3.addEventListener("click", () => {
    lastNumber = activeNumber;
    activeNumber = 3;
    display.textContent = activeNumber;
})

// operator buttons

let multiplyOperator = document.getElementById("multiply");
multiplyOperator.addEventListener("click", () => {
    operator = "multiply";
});

// equals button

let equals = document.getElementById("equal");
equals.addEventListener("click", () => {
    let result = operate(operator, lastNumber, activeNumber);
    activeNumber = result;
    display.textContent = activeNumber;
});