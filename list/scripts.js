function addItem() {
    const input = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');
    const itemText = input.value.trim();

    if (itemText === '') {
        alert('Please enter an item.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = itemText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        itemList.removeChild(li);
    };

    li.appendChild(removeButton);
    itemList.appendChild(li);

    input.value = '';
    input.focus();
}
