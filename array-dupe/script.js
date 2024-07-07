function removeDuplicates() {
    const input = document.getElementById('array-input').value;
    const resultDiv = document.getElementById('result');
    
    // Convert input string to array of numbers
    const array = input.split(',').map(Number);
    
    if (array.some(isNaN)) {
        resultDiv.innerText = 'Please enter a valid array of numbers';
        return;
    }
    
    const uniqueArray = [];
    
    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (array[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(array[i]);
        }
    }
    
    resultDiv.innerText = `Unique Array: [${uniqueArray.join(', ')}]`;
}
