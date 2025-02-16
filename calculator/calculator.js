const Display = document.getElementById("Display");

function appendToDisplay(input) {
   Display.value += input;
}

function calculate() {
    try {
        Display.value = eval(Display.value);
    } catch (e) {
        Display.value = "Error";
    }
}

function clearDisplay() {
    Display.value = "";
}
