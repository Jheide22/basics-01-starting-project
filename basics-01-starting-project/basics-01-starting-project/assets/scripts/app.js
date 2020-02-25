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
    const eneteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += eneteredNumber; 
    createAndWriteOutput('+', initialResult, eneteredNumber);
    writeToLog('ADD', initialResult, eneteredNumber, currentResult);
}
function subtract(){
    const eneteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= eneteredNumber;
    createAndWriteOutput('-', initialResult, eneteredNumber);
    writeToLog('SUBTRACT', initialResult, eneteredNumber, currentResult);
}
function multiply(){
    const eneteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= eneteredNumber; 
    createAndWriteOutput('*', initialResult, eneteredNumber);
    writeToLog('MULTIPLY', initialResult, eneteredNumber, currentResult);
}
function divide(){
    const eneteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= eneteredNumber; 
    createAndWriteOutput('/', initialResult, eneteredNumber);
    writeToLog('DIVIDE', initialResult, eneteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);