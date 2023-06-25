let result = document.getElementById('result');

function appendCharacter(char) {
    result.value += char;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    try {
        const expression = result.value;
        const answer = eval(expression);
        result.value = answer;
    } catch (error) {
        result.value = 'Error';
    }
}
