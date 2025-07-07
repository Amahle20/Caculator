let expression = '';

function digitBtnPressed(digit) {
    const input = document.getElementById("inputbox");
    if (input.value === "0") {
        input.value = digit;
    } else {
        input.value += digit;
    }
    expression += digit;
}

function operatorBtnPressed(operator) {
    const input = document.getElementById("inputbox");
    input.value += operator;
    expression += operator;
}

function calculateResult() {
    try {
        const result = eval(expression);
        document.getElementById("inputbox").value = result;
        expression = result.toString(); // Allow chaining
    } catch (e) {
        document.getElementById("inputbox").value = "Error";
        expression = '';
    }
}

function clearInput() {
    document.getElementById("inputbox").value = "0";
    expression = '';
}
