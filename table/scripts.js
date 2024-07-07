// Function to add a new row to the table
function addRow() {
    const table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = prompt("Enter Name:");
    cell2.innerHTML = prompt("Enter Age:");
    cell3.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
}

// Function to delete a row from the table
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Function to sort the table by the first column (Name)
function sortTable() {
    const table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    const rows = Array.from(table.rows);

    rows.sort((a, b) => {
        const nameA = a.cells[0].innerText.toLowerCase();
        const nameB = b.cells[0].innerText.toLowerCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });

    // Re-attach the sorted rows
    for (const row of rows) {
        table.appendChild(row);
    }
}
