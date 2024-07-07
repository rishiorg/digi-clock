document.getElementById('stringForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputString = document.getElementById('inputString').value;
    const method = document.getElementById('methodSelect').value;
    let result;

    switch(method) {
        case 'length':
            result = `Length: ${inputString.length}`;
            break;
        case 'toUpperCase':
            result = `toUpperCase: ${inputString.toUpperCase()}`;
            break;
        case 'toLowerCase':
            result = `toLowerCase: ${inputString.toLowerCase()}`;
            break;
        case 'charAt':
            result = `charAt(0): ${inputString.charAt(0)}`;
            break;
        case 'substring':
            result = `substring(0, 5): ${inputString.substring(0, 5)}`;
            break;
        default:
            result = 'Invalid method';
    }

    document.getElementById('result').textContent = result;
});
