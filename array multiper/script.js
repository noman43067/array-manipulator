let array = [];

function updateDisplay() {
    const arrayDisplay = document.getElementById('array-display');
    arrayDisplay.innerHTML = `Current Array: [${array.join(', ')}]`;
}

function addElement() {
    const input = document.getElementById('array-input');
    const value = input.value.trim();
    if (value) {
        array.push(value);
        input.value = '';
        updateDisplay();
        document.getElementById('result-message').textContent = '';
    } else {
        document.getElementById('result-message').textContent = 'Please enter a valid element.';
    }
}

function push() {
    const input = document.getElementById('array-input');
    const value = input.value.trim();
    if (value) {
        array.push(value);
        input.value = '';
        updateDisplay();
        document.getElementById('result-message').textContent = '';
    }
}

function pop() {
    const poppedElement = array.pop();
    updateDisplay();
    document.getElementById('result-message').textContent = `Popped Element: ${poppedElement}`;
}

function shift() {
    const shiftedElement = array.shift();
    updateDisplay();
    document.getElementById('result-message').textContent = `Shifted Element: ${shiftedElement}`;
}

function unshift() {
    const input = document.getElementById('array-input');
    const value = input.value.trim();
    if (value) {
        array.unshift(value);
        input.value = '';
        updateDisplay();
        document.getElementById('result-message').textContent = '';
    }
}

function slice() {
    // Implement slice functionality (e.g., slice from index 0 to 2)
    const slicedArray = array.slice(0, 2);
    document.getElementById('result-message').textContent = `Sliced Array: [${slicedArray.join(', ')}]`;
}

function splice() {
    // Example: remove 1 element from index 0
    const splicedElements = array.splice(0, 1);
    updateDisplay();
    document.getElementById('result-message').textContent = `Spliced Element: ${splicedElements.join(', ')}`;
}
