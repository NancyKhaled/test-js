function addData() { 
    // Get input values 
    let name = 
        document.getElementById("nameInput").value; 
    let price = 
        document.getElementById("priceInput").value; 
    let description = 
        document.getElementById("descriptionInput").value.replace(/^\s*|\s*$/g, ''); 
            
    // Get the table and insert a new row at the end 
    let table = document.getElementById("outputTable"); 
    let newRow = table.insertRow(table.rows.length); 
    
    // Insert data into cells of the new row 
    newRow.insertCell(0).innerHTML = name; 
    newRow.insertCell(1).innerHTML = price; 
    newRow.insertCell(2).innerHTML = description; 
    newRow.insertCell(3).innerHTML = 
        '<button class="actionBtn" onclick="editData(this)">Edit</button>'+ 
        '<button class="actionBtn" onclick="deleteData(this)">Delete</button>'; 
    
    // Clear input fields 
    clearInputs(); 
} 
// --------------------------------------------------------------
function editData(button) { 
    // Get the parent row of the clicked button 
    let row = button.parentNode.parentNode; 
    
    // Get the cells within the row 
    let nameCell = row.cells[0]; 
    let priceCell = row.cells[1]; 
    let descriptionCell = row.cells[2]; 
    
    // Prompt the user to enter updated values 
    let nameInput = 
        prompt("Enter the updated name:", 
            nameCell.innerHTML); 
    let priceInput = 
        prompt("Enter the updated price details:", 
            priceCell.innerHTML 
        ); 
    let descriptionInput = 
        prompt("Enter the updated description:", 
            descriptionCell.innerHTML 
        ); 
    
    // Update the cell contents with the new values 
    nameCell.innerHTML = nameInput; 
    priceCell.innerHTML = priceInput; 
    descriptionCell.innerHTML = descriptionInput; 
} 
// ---------------------------------------------------------------
function deleteData(button) { 
    // Get the parent row of the clicked button 
    let row = button.parentNode.parentNode; 

    // Remove the row from the table 
    row.parentNode.removeChild(row); 
}
// ----------------------------------------------------------------
function clearInputs() { 
    // Clear input fields 
    document.getElementById("nameInput").value = ""; 
    document.getElementById("priceInput").value = ""; 
    document.getElementById("descriptionInput").value = ""; 
} 