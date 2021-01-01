/*
*****STEPS*****
    X1. Build the calculator in html
    2. Create the global variables
        a. prevCalcScreenNums (id Name)
    X3. Crate operator functions
        a. add
        b. subtract
        c. multipy
        d. divide
    X4. Create operate function
        *Takes an operator and 2 nums  
        *Calls operator function on the nums
    5. Create functions that populate display when num buttons are clicked. Store 'display value' in a variable
    6. Store first number that's input when user presses an operator
    7. Save what operation was chosen and call operate() on them when user hits =.
        *Update 'display value' with 'solution'.
    8. Watch out!
        *Users should be able to string together operations and order is evaluated correctly
        *Round answers with long decimals so don't overflow screen
        *Error message if user tries to divide by zero.
    EXTRA CREDIT 1: Include a decimal that disables if there's already one in the display
    EXTRA CREDIT 2: Add a backspace button
    EXTRA CREDIT 3: Add keyboard support... or touchscreen?
*/

// Global variables
let prevNums = document.getElementById('prevCalcScreenNums');
let currNums = document.getElementById('currCalcScreenNums');
let numString1= parseFloat(prevNums.textContent);;
let numString2;


// Operator functions
// const add = (num1, num2) => {
//     return num1 + num2;
// }

// const subtract = (num1, num2) => {
//     return num1 - num2;
// }

// const multiply = (num1, num2) => {
//     return num1 * num2;
// }

// const divide = (num1, num2) => {
//     return num2 === 0 ? console.log("Can't do that, mate.") : num1 / num2;
// }

const operators = document.querySelectorAll('.operation');
    operators.forEach(button => button.addEventListener('click', function() {
        prevNums.innerHTML = currNums.textContent + ' '; 
        prevNums.innerHTML += button.value;
        currNums.innerHTML = '';
    }))


// The OPERATE function
const operate = (operator, num1, num2) => {
    num1 = parseFloat(prevNums.textContent.slice(0,-1));
    num2 = parseFloat(currNums.textContent);
    const maxLength = 10;
    let solution;

    if (prevNums.textContent.slice(-1) === '+') {
        prevNums.textContent += ' ' + currNums.textContent;
        solution = num1 + num2;
    }

    if (prevNums.textContent.slice(-1) === '-') {
        prevNums.textContent += ' ' + currNums.textContent;
        solution = num1 - num2;
    }

    if (prevNums.textContent.slice(-1) === 'x') {
        prevNums.textContent += ' ' + currNums.textContent;
        solution = num1 * num2;
    }

    if (prevNums.textContent.slice(-1) === '÷') {
        prevNums.textContent += ' ' + currNums.textContent;
        solution = num1 / num2;
    }

    if (prevNums.textContent.slice(-1) === '²') {
        prevNums.textContent += currNums.textContent;
        solution = num1 ** 2;
    }

    if (prevNums.textContent.slice(-1) === '√') {
        prevNums.textContent += '' + currNums.textContent;
        solution = Math.sqrt(num1);
    }


    if (solution.toString().length > maxLength) {
        solution = solution.toFixed(5);
    }
    currNums.textContent = solution;
}


// The DISPLAY function
const displayNums = () => {
    const nums = document.querySelectorAll('.numButton');
    nums.forEach(button => button.addEventListener('click', function() {
        currNums.innerHTML += button.value;
    }));
}

displayNums();


// Event Listeners
// Event Listener to Clear Screen
document.querySelector('.clear').addEventListener('click', function () {
    prevNums.innerHTML = '';
    currNums.innerHTML = '';
})

document.querySelector('.enter').addEventListener('click', operate);