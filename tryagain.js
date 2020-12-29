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
const prevNums = document.getElementById('prevCalcScreenNums');
const currNums = document.getElementById('currCalcScreenNums');
let numString1= parseFloat(prevNums.textContent);;
let numString2;


// Operator functions
const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num2 === 0 ? console.log("Can't do that, mate.") : num1 / num2;
}

// The OPERATE function
const operate = (operator, num1, num2) => {
    //console.log('start operating');// Yes, this is reached
    num1 = prevNums.textContent;
    num2 = currNums.textContent;
    console.log(num1.slice(0,-1), num2); // Yes, but now how do I actually add them?...
    switch (operator) {
        case 'add':
            return add(num1.slice(0, -1), num2);
            break;
        case 'subtract':
            subtract(num1, num2);
            break;
        case 'multiply':
            multiply(num1, num2);
            break;
        case 'divide':
            divide(num1, num2);
            break;
    }
}


// The DISPLAY function
const displayNums = () => {
    const nums = document.querySelectorAll('.numButton');
    nums.forEach(button => button.addEventListener('click', function() {
        // prevNums.innerHTML += button.value; // Shouldn't be the small ones
        currNums.innerHTML += button.value;
        // updateCalcScreen(button.value);
    }));
    const operators = document.querySelectorAll('.operation');
    operators.forEach(button => button.addEventListener('click', function() {
        prevNums.innerHTML = currNums.textContent; 
        prevNums.innerHTML += button.textContent;
        currNums.innerHTML = '';
    }))
}

displayNums();

// The DISPLAY function, part II
// DOESN'T DO ANYTHING
const updateCalcScreen = (inputValue) => {
    prevNums.innerHTML += inputValue;
}




// Event Listeners
// Event Listener to Clear Screen
document.querySelector('.clear').addEventListener('click', function () {
    prevNums.innerHTML = '';
    currNums.innerHTML = '';
})
document.querySelector('.add').addEventListener('click', operate(add, numString1, numString2) );

document.querySelector('.enter').addEventListener('click', operate);