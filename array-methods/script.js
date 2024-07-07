document.getElementById('methods').addEventListener('change', function() {
    const method = this.value;
    const additionalInput = document.getElementById('additionalInput');
    if (['push', 'unshift', 'map', 'filter', 'reduce'].includes(method)) {
        additionalInput.classList.remove('hidden');
    } else {
        additionalInput.classList.add('hidden');
    }
});

function performArrayMethod() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(item => item.trim());
    const method = document.getElementById('methods').value;
    const additionalValue = document.getElementById('additionalValue').value;
    let result;

    try {
        switch (method) {
            case 'map':
                result = array.map(item => `${item} ${additionalValue}`);
                break;
            case 'filter':
                result = array.filter(item => item.includes(additionalValue));
                break;
            case 'reduce':
                result = array.reduce((acc, item) => acc + item + additionalValue, '');
                break;
            case 'forEach':
                result = [];
                array.forEach(item => result.push(`${item} processed`));
                break;
            case 'find':
                result = array.find(item => item.includes(additionalValue));
                break;
            case 'sort':
                result = array.sort();
                break;
            case 'push':
                array.push(additionalValue);
                result = array;
                break;
            case 'pop':
                array.pop();
                result = array;
                break;
            case 'shift':
                array.shift();
                result = array;
                break;
            case 'unshift':
                array.unshift(additionalValue);
                result = array;
                break;
            default:
                result = array;
        }

        document.getElementById('output').innerText = Array.isArray(result) ? result.join(', ') : result;
    } catch (error) {
        document.getElementById('output').innerText = 'An error occurred: ' + error.message;
    }
}
