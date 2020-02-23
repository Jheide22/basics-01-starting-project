const defaultResult = 0;
let currentResult;

function add(){
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, calculationDesc); 
}
function subtract(){
    currentResult = currentResult - userInput.value;
    outputResult(currentResult, calculationDesc); 
}
function multiply(){
    currentResult = currentResult * userInput.value;
    outputResult(currentResult, calculationDesc); 
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
