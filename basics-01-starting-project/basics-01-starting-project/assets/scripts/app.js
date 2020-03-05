const defaultResult = 0;
let logEntries = [];
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}
function writeToLog(
    operationidentifier,
    prevResult,
    operationNumber,
    newResult){
        const logEntry = {
            operation: operationidentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}
function add(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber; 
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}
function subtract(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}
function multiply(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber; 
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}
function divide(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber; 
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);