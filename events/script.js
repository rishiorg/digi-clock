// Get elements by ID
const clickButton = document.getElementById('clickButton');
const hoverButton = document.getElementById('hoverButton');
const doubleClickButton = document.getElementById('doubleClickButton');
const output = document.getElementById('output');

// Add event listener for click event
clickButton.addEventListener('click', () => {
    output.textContent = 'Button Clicked!';
});

// Add event listener for mouseover event
hoverButton.addEventListener('mouseover', () => {
    output.textContent = 'Button Hovered Over!';
});

// Add event listener for double click event
doubleClickButton.addEventListener('dblclick', () => {
    output.textContent = 'Button Double Clicked!';
});
