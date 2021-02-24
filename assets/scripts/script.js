let result;
let clearDisplay = false;
let display = document.querySelector(".display span");
let numberWasTyped = false;
let actualOperation;
let temporaryNumber;
let equalWasTyped = false;
let restartOperation = true;
let numberLimitOnDisplay = 15;

function insertNumber(element) {
    if(clearDisplay == false) {
        if(display.innerHTML == "0"){
            display.innerHTML = element.innerHTML;
            display.style.fontSize = "24px";
            numberWasTyped = true;
        } else {
            let number = display.innerHTML + element.innerHTML;
            number = removeDecimalPoint(number);
            setLimitNumberOnDisplay(number);
            if(number.length <= numberLimitOnDisplay) {
                decreaseNumbersOnDisplay();
                display.innerHTML = insertDecimalPoint(number);
                numberWasTyped = true;
                equalWasTyped = false;
            }
        }
    } else {
        display.innerHTML = element.innerHTML;
        display.style.fontSize = "24px";
        clearDisplay = false;
        numberWasTyped = true;
        equalWasTyped = false;
    }
}

function sum() {
    let number = display.innerHTML;
    number = removeDecimalPoint(number);
    number = parseFloat(number.replace(",", "."));
    actualOperation = "+";
    if(result == undefined || restartOperation == true) {
        result = number;
        clearDisplay = true;
        restartOperation = false;
        numberWasTyped = false;
    } else {
        if(numberWasTyped == true) {
            result = result + number;
            display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
            decreaseNumbersOnDisplay();
            clearDisplay = true;
            numberWasTyped = false;
            equalWasTyped = false;
        }
    }
}

function subtract() {
    let number = display.innerHTML;
    number = removeDecimalPoint(number);
    number = parseFloat(number.replace(",", "."));
    actualOperation = "-";
    if(result == undefined || restartOperation == true) {
        result = number;
        clearDisplay = true;
        restartOperation = false;
        numberWasTyped = false;
    } else {
        if(numberWasTyped == true) {
            result = result - number;
            display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
            decreaseNumbersOnDisplay();
            clearDisplay = true;
            numberWasTyped = false;
            equalWasTyped = false;
        }
    }
}

function multiply() {
    let number = display.innerHTML;
    number = removeDecimalPoint(number);
    number = parseFloat(number.replace(",", "."));
    actualOperation = "*";
    if(result == undefined || restartOperation == true) {
        result = number;
        clearDisplay = true;
        restartOperation = false;
        numberWasTyped = false;
    } else {
        if(numberWasTyped == true) {
            result = result * number;
            display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
            decreaseNumbersOnDisplay();
            clearDisplay = true;
            numberWasTyped = false;
            equalWasTyped = false;
        }
    }
}

function divide() {
    let number = display.innerHTML;
    number = removeDecimalPoint(number);
    number = parseFloat(number.replace(",", "."));
    actualOperation = "/";
    if(result == undefined || restartOperation == true) {
        result = number;
        clearDisplay = true;
        restartOperation = false;
        numberWasTyped = false;
    } else {
        if(numberWasTyped == true) {
            result = result / number;
            display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
            decreaseNumbersOnDisplay();
            clearDisplay = true;
            numberWasTyped = false;
            equalWasTyped = false;
        }
    }
}

function percentage() {
    let number = display.innerHTML;
    number = removeDecimalPoint(number);
    number = parseFloat(number.replace(",", "."));
    actualOperation = "%";
    if(result == undefined || restartOperation == true) {
        result = number;
        clearDisplay = true;
        restartOperation = false;
        numberWasTyped = false;
    } else {
        if(numberWasTyped == true) {
            result = result * (number / 100);
            display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
            decreaseNumbersOnDisplay();
            clearDisplay = true;
            numberWasTyped = false;
            equalWasTyped = false;
        }
    }
}

function equal() {
    let number = display.innerHTML;
    number = removeDecimalPoint(number);
    number = parseFloat(number.replace(",", "."));
    switch(actualOperation) {
        case "+":
            if(equalWasTyped == false) {
                result = result + number;
                display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
                decreaseNumbersOnDisplay();
                temporaryNumber = number;
                clearDisplay = true;
                numberWasTyped = false;
                equalWasTyped = true;
                restartOperation = true;
                break;
            } else {
                result = result + temporaryNumber;
                display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
                decreaseNumbersOnDisplay();
                break;
            }            
        
        case "-":
            if(equalWasTyped == false) {
                result = result - number;
                display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
                decreaseNumbersOnDisplay();
                temporaryNumber = number;
                clearDisplay = true;
                numberWasTyped = false;
                equalWasTyped = true;
                restartOperation = true;
                break;
            } else {
                result = result - temporaryNumber;
                display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
                decreaseNumbersOnDisplay();
                break;
            } 

        case "*":
            if(equalWasTyped == false) {
                result = result * number;
                display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
                decreaseNumbersOnDisplay();
                temporaryNumber = number;
                clearDisplay = true;
                numberWasTyped = false;
                equalWasTyped = true;
                restartOperation = true;
                break;
            } else {
                result = result * temporaryNumber;
                display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
                decreaseNumbersOnDisplay();
                break;
            } 

        case "/":
            if(equalWasTyped == false) {
                result = result / number;
                display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
                decreaseNumbersOnDisplay();
                temporaryNumber = number;
                clearDisplay = true;
                numberWasTyped = false;
                equalWasTyped = true;
                restartOperation = true;
                break;
            } else {
                result = result / temporaryNumber;
                display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
                decreaseNumbersOnDisplay();
                break;
            }

        case "%":
            if(equalWasTyped == false) {
                result = result * (number / 100);
                display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
                decreaseNumbersOnDisplay();
                temporaryNumber = number;
                clearDisplay = true;
                numberWasTyped = false;
                equalWasTyped = true;
                restartOperation = true;
                break;
            } else {
                result = result * (temporaryNumber / 100);
                display.innerHTML = insertDecimalPoint(result.toString().replace(".", ","));
                decreaseNumbersOnDisplay();
                break;
            }
    }
}

function clearCalculator() {
    display.innerHTML = "0";
    display.style.fontSize = "23px";
    result = undefined;
    clearDisplay = false;
    numberWasTyped = false;
    equalWasTyped = false;
    actualOperation = undefined;
}

function addComma() {
    if(display.innerHTML.includes(",") == false) {
        if(clearDisplay == false) {
            display.innerHTML = display.innerHTML + ",";
            decreaseNumbersOnDisplay();
        } else {
            display.innerHTML = "0,";
            clearDisplay = false;
        }
    }
}

function changeSign() {
    if(display.innerHTML.charAt(0) == "-") {
        display.innerHTML = display.innerHTML.replace("-", "");
    } else {
        if(display.innerHTML != "0") {
            display.innerHTML = "-" + display.innerHTML;
            decreaseNumbersOnDisplay();
        }
    }
}

function insertDecimalPoint(number) {
    if(!number.includes(",") && number.length > 3) {
        number = number.split("");
        number.reverse();
        for(let i=3; i<number.length; i+=3) {
            number[i] += ".";
        }
        number.reverse();
        number = number.join("");
        return number;

    } else if(number.includes(",")) {
        let commaPosition = number.indexOf(",");
        if(number.slice(0, commaPosition).length > 3) {
            let commaAndNumbersAfterTheComma = number.slice(commaPosition);
            number = number.slice(0, commaPosition);
            number = number.split("");
            number.reverse();
            for(let i=3; i<number.length; i+=3) {
                number[i] += ".";
            }
            number.reverse();
            number = number.join("");
            number += commaAndNumbersAfterTheComma;
            return number;

        } else {
            return number;
        }
    } else {
        return number;
    }
}

function removeDecimalPoint(number) {
    number = number.split("");
    number = number.filter((item) => {
        if(item != ".") {
            return true;
        } else {
            return false;
        }
    });
    number = number.join("");
    return number;
}

function setLimitNumberOnDisplay(number) {
    if(number.includes(",")) {
        numberLimitOnDisplay = 16;
    } else {
        numberLimitOnDisplay = 15;
    }
}

function decreaseNumbersOnDisplay() {
    let fontSizeDisplay = 23;
    while(display.clientWidth > display.parentNode.clientWidth - 20) {
        display.style.fontSize = fontSizeDisplay + "px";
        fontSizeDisplay -= 1;
    }
}

// Faz com que a calculadora receba comandos do teclado do cumputador
window.addEventListener("keydown", (event) => {
    let allKeys = document.querySelectorAll(".keyboard_key");
    let actualKey;
    switch(event.key) {
        case "1":
            for(let i=0; i<allKeys.length; i++) {
                if(allKeys[i].innerHTML == "1") {
                    actualKey = allKeys[i];
                }
            }
            insertNumber(actualKey);
            break;

        case "2":
            for(let i=0; i<allKeys.length; i++) {
                if(allKeys[i].innerHTML == "2") {
                    actualKey = allKeys[i];
                }
            }
            insertNumber(actualKey);
            break;

        case "3":
            for(let i=0; i<allKeys.length; i++) {
                if(allKeys[i].innerHTML == "3") {
                    actualKey = allKeys[i];
                }
            }
            insertNumber(actualKey);
            break;

        case "4":
            for(let i=0; i<allKeys.length; i++) {
                if(allKeys[i].innerHTML == "4") {
                    actualKey = allKeys[i];
                }
            }
            insertNumber(actualKey);
            break;

        case "5":
            for(let i=0; i<allKeys.length; i++) {
                if(allKeys[i].innerHTML == "5") {
                    actualKey = allKeys[i];
                }
            }
            insertNumber(actualKey);
            break;

        case "6":
            for(let i=0; i<allKeys.length; i++) {
                if(allKeys[i].innerHTML == "6") {
                    actualKey = allKeys[i];
                }
            }
            insertNumber(actualKey);
            break;

        case "7":
            for(let i=0; i<allKeys.length; i++) {
                if(allKeys[i].innerHTML == "7") {
                    actualKey = allKeys[i];
                }
            }
            insertNumber(actualKey);
            break;

        case "8":
            for(let i=0; i<allKeys.length; i++) {
                if(allKeys[i].innerHTML == "8") {
                    actualKey = allKeys[i];
                }
            }
            insertNumber(actualKey);
            break;

        case "9":
            for(let i=0; i<allKeys.length; i++) {
                if(allKeys[i].innerHTML == "9") {
                    actualKey = allKeys[i];
                }
            }
            insertNumber(actualKey);
            break;

        case "0":
            for(let i=0; i<allKeys.length; i++) {
                if(allKeys[i].innerHTML == "0") {
                    actualKey = allKeys[i];
                }
            }
            insertNumber(actualKey);
            break;

        case "Escape":
            clearCalculator();
            break;

        case "Enter":
            equal();
            break;

        case "+":
            sum();
            break;

        case "-":
            subtract();
            break;

        case "*":
            multiply();
            break;

        case "/":
            divide();
            break;

        case "%":
            percentage();
            break;

        case ",":
            addComma();
            break;
    }
});