function convertTemperature() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let result = document.getElementById('result');
    let convertedTemperature;

    if (isNaN(temperature)) {
        result.innerText = 'Please enter a valid number';
        return;
    }

    if (from === to) {
        convertedTemperature = temperature;
    } else {
        if (from === 'celsius') {
            if (to === 'fahrenheit') {
                convertedTemperature = (temperature * 9/5) + 32;
            } else if (to === 'kelvin') {
                convertedTemperature = temperature + 273.15;
            }
        } else if (from === 'fahrenheit') {
            if (to === 'celsius') {
                convertedTemperature = (temperature - 32) * 5/9;
            } else if (to === 'kelvin') {
                convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            }
        } else if (from === 'kelvin') {
            if (to === 'celsius') {
                convertedTemperature = temperature - 273.15;
            } else if (to === 'fahrenheit') {
                convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            }
        }
    }

    result.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${to.charAt(0).toUpperCase() + to.slice(1)}`;
}
