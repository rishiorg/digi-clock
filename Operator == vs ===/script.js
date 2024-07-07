function checkDoubleEquals() {
    let num = 5;
    let str = '5';
    
    if (num == str) {
        document.getElementById('result').innerText = `5 == '5' is true`;
    } else {
        document.getElementById('result').innerText = `5 == '5' is false`;
    }
}

function checkTripleEquals() {
    let num = 5;
    let str = '5';
    
    if (num === str) {
        document.getElementById('result').innerText = `5 === '5' is true`;
    } else {
        document.getElementById('result').innerText = `5 === '5' is false`;
    }
}
