function calculate() {
    // Fetch input values
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();
    let operator = document.getElementById('operator').value;

    // Parse inputs as integers
    let num1 = parseInt(input1);
    let num2 = parseInt(input2);

    let result;
    switch (operator) {
        case 'and':
            result = num1 && num2;
            break;
        case 'or':
            result = num1 || num2;
            break;
        case 'not':
            result = !num1;
            break;
        default:
            result = 'Invalid operator';
    }

    // Display the result
    document.getElementById('output').textContent = result;
}
