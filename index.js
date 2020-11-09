let calcScreen = document.getElementById('calcScreenNums');
let clearBtn = document.querySelector('.clear');

const updateCalcScreen = (inputValue) => {
    calcScreen.textContent += inputValue;
}

// updateCalcScreen('123456789');

// Populate screen display when a NUMBER button is clicked
let buttonValues = document.querySelectorAll('.numButton');
buttonValues.forEach(element => element.addEventListener('click', 
        function() {updateCalcScreen(element.value)}
));

// AC button clears the screen
clearBtn.addEventListener('click', function() {updateCalcScreen(calcScreen.textContent = '')})