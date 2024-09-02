const display = document.querySelector("#display");

let activeNumber = 0;
let lastNumber = 0;
let operator = "";

function displayUpdate() {
    display.textContent = activeNumber;
}
displayUpdate();

function clear() {
    activeNumber = 0;
    lastNumber = 0;
    tempNumber = 0;
    operator = "";
};

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

// number buttons
let button1 = document.getElementById("one");
button1.addEventListener("click", () => {
    lastNumber = activeNumber;
    addDigit(1);
    displayUpdate();
})

let button2 = document.getElementById("two");
button2.addEventListener("click", () => {
    lastNumber = activeNumber;
    addDigit(2);
    displayUpdate();
})

let button3 = document.getElementById("three");
button3.addEventListener("click", () => {
    lastNumber = activeNumber;
    addDigit(3);
    displayUpdate();
})

let button4 = document.getElementById("four");
button4.addEventListener("click", () => {
    lastNumber = activeNumber;
    addDigit(4);
    displayUpdate();
})

let button5 = document.getElementById("five");
button5.addEventListener("click", () => {
    lastNumber = activeNumber;
    addDigit(5);
    displayUpdate();
})

let button6 = document.getElementById("six");
button6.addEventListener("click", () => {
    lastNumber = activeNumber;
    addDigit(6);
    displayUpdate();
})

let button7 = document.getElementById("seven");
button7.addEventListener("click", () => {
    lastNumber = activeNumber;
    addDigit(7);
    displayUpdate();
})

let button8 = document.getElementById("eight");
button8.addEventListener("click", () => {
    lastNumber = activeNumber;
    addDigit(8);
    displayUpdate();
})

let button9 = document.getElementById("nine");
button9.addEventListener("click", () => {
    lastNumber = activeNumber;
    addDigit(9);
    displayUpdate();
})

// operator buttons
let tempNumber = 0;
let multiplyOperator = document.getElementById("multiply");
multiplyOperator.addEventListener("click", () => {
    operator = "multiply";
    tempNumber = activeNumber;
    activeNumber = 0;
    displayUpdate();
});

//active number concat
function addDigit(a) {
    if (operator != "" && activeNumber.length == 1) {
        let tempString = "" + a;
        activeNumber = parseInt(tempString);
        console.log(activeNumber)
        return activeNumber;
    } else {
        let tempString = "" + activeNumber + a;
        activeNumber = parseInt(tempString);
        console.log(activeNumber)
        return activeNumber;
    }
};

// equals button
let equals = document.getElementById("equal");
equals.addEventListener("click", () => {
    if (operator != "") {
        activeNumber = parseInt(operate(operator, tempNumber, activeNumber));
        console.log(activeNumber);
        operator = "";
        displayUpdate();
    } else {
        displayUpdate();
        return;
    }
});

// ac button
let ac = document.getElementById("ac");
ac.addEventListener("click", () => {
    clear();
    displayUpdate();
});
