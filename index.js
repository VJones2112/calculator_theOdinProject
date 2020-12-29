// /*let calcScreen = document.getElementById('calcScreenNums');
// let clearBtn = document.querySelector('.clear');
// let operations = document.querySelectorAll('.operation'); // NODELIST!
// // console.log(operations);
// let num1 = [];
// let num2 = [];
// const maxLength = 12;
// let currentDigit = '0'; //** 
// let previousDigit = '0'; //** */


// /*
// function AddDigit(dig){
//     if (currentDigit.length > MAXLENGTH) { 
//            currentDigit = "Aargh! Too long"; 
//        } else { 
//            if ((eval(currentDigit) == 0) && (currentDigit.indexOf(".") == -1)) { 
//                currentDigit = dig;
//            } else { 
//                currentDigit = currentDigit + dig;
//            };
//         }; 
//     };
//    document.Calculator.Display.value = Current;
//  }
// */
// // Event Handlers
// /*
// const addDigit = (digit) => {
//     if (currentDigit.length > maxLength) {currentDigit = 'Too long';}
//     else {
//         if (currentDigit === 0 && currentDigit.indexOf('.') === -1) {
//             currentDigit = digit;
//         } else {currentDigit += digit};
//         // calcScreen.value = currentDigit;
//     }
//     calcScreen.innerHTML += currentDigit;
// }

// // Handle the decimal
// const decimalPoint = () => {
//     if (currentDigit.length === 0) {
//         currentDigit = '0.';
//     } else if (currentDigit.indexOf('.') === -1) {
//         currentDigit += '.';
//     }
//     calcScreen.innerHTML += currentDigit;
// }
// */
// /*
// // Populate screen display when a NUMBER button is clicked
// let buttonValues = document.querySelectorAll('.numButton');
// buttonValues.forEach(element => element.addEventListener('click',

//     function() {updateCalcScreen(element.value)}
// ));
// // calcScreen.innerHTML += inputValue;


// const decimalPoint = () => {
//     if (calcScreen.innerHTML.length === 0) {
//         calcScreen.innerHTML += '0.';
//     } else if (calcScreen.innerHTML.indexOf('.') === -1) {
//         calcScreen.innerHTML += '.';
//     }
//     // calcScreen.innerHTML += currentDigit;
// }


// const updateCalcScreen = (inputValue) => {
//     // decimalPoint();
//     num1.push(calcScreen.innerHTML += inputValue);
//     console.log('num1', num1);
//     // calcScreen.display.value += inputValue;
//     getOperation();
//     applyOperations();
//     // num2.push(calcScreen.innerHTML += inputValue);
//     // console.log('num2', num2);
//     if (calcScreen.innerHTML.length > maxLength) {calcScreen.innerHTML = 'Too long'}
//     /*if (inputValue.length > 10) {
//         calcScreen.innerHTML = inputValue.slice(0,9);
//     }*/
// }

// const getOperation = () => {
//     const operationNames = [];
//     const addition = document.querySelector('.add');
//     const subtraction = document.querySelector('.subtract');
//     operationNames.push(addition, subtraction);
//     console.log(operationNames);
// }

// const add = (num1, num2) => {
//     return num1 + num2;
// }
// const applyOperations = (operation, num1, num2) => {
//     switch (operation) {
//         case "add":
//             return add(num1, num2);
//             break;

//     }


//     // operations.forEach(element => element.addEventListener('click', function() {
//     //     console.log('?')
//     //     // if (element.value === 'x') {
//     //     //     return inputValue *= inputValue;
//     //     // }
//     //     // if (element.value === 'sqrt') {
//     //     //     return Math.sqrt(inputValue);
//     //     // }
//     // }))

// }



// // Populate screen display when a DECIMAL or POSITIVE/NEGATIVE button is clicked
// let decimalButton = document.querySelector('.decimal');
// decimalButton.addEventListener('click', 
//         function() {updateCalcScreen('.'); return;} // I need to limit just one decimal    
// );
// let posNegButton = document.querySelector('.posNeg');
// // posNegButton.addEventListener('click', function() {
// //     updateCalcScreen(element[0] = -1);
// // }) // DOES NOT WORK


// // AC button clears the screen
// clearBtn.addEventListener('click', function() {updateCalcScreen(calcScreen.textContent = '')})