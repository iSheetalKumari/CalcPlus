function clearDisplay() {
    document.getElementById('current-operand').innerText = '';
    document.getElementById('previous-operand').innerText = '';
}

function deleteLast() {
    const display = document.getElementById('current-operand');
    display.innerText = display.innerText.slice(0, -1);
}

function appendToDisplay(value) {
    const display = document.getElementById('current-operand');
    display.innerText += value;
}

function calculate() {
    try {
        const currentDisplay = document.getElementById('current-operand').innerText;
        const result = eval(currentDisplay);
        document.getElementById('previous-operand').innerText = currentDisplay;
        document.getElementById('current-operand').innerText = result;
    } catch (error) {
        alert('Invalid Expression');
        clearDisplay();
    }
}