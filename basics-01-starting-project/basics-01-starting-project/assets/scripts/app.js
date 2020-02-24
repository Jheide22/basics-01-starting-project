const defaultResult = 0;
let currentResult = defaultResult;

function add(){
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, ''); 
}
function subtract(){
    currentResult = currentResult - userInput.value;
    outputResult(currentResult, ''); 
}
function multiply(){
    currentResult = currentResult * userInput.value;
    outputResult(currentResult, ''); 
}
function divide(){
    currentResult = currentResult * userInput.value;
    outputResult(currentResult, ''); 
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// testing squash