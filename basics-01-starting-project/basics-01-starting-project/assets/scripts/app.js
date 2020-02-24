const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}
function add(){
    const eneteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + eneteredNumber; 
    createAndWriteOutput('+', initialResult, eneteredNumber);
}
function subtract(){
    const eneteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - eneteredNumber;
    createAndWriteOutput('-', initialResult, eneteredNumber);
}
function multiply(){
    const eneteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * eneteredNumber; 
    createAndWriteOutput('*', initialResult, eneteredNumber);
}
function divide(){
    const eneteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / eneteredNumber; 
    createAndWriteOutput('/', initialResult, eneteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);