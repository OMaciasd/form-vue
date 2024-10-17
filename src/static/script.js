let items = [];
const apiUrl = 'https://backend-crud-5d2c.onrender.com/api/items';
const itemsList = document.getElementById('itemsList');
const statusMessage = document.getElementById('statusMessage');

window.onload = fetchItems;

async function fetchItems() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Error fetching items: ${response.statusText}`);
        items = await response.json();
        renderItems();
    } catch (error) {
        showError(error.message);
    }
}

function renderItems() {
    itemsList.innerHTML = '';

    items.forEach((item, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;

        const actionsCell = document.createElement('td');

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
        editButton.onclick = () => editItem(item.id, item.name);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';
        deleteButton.onclick = () => deleteItem(item.id, index);

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(nameCell);
        row.appendChild(actionsCell);

        itemsList.appendChild(row);
    });
}

document.getElementById('crudForm').onsubmit = async function (event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value.trim();
    const itemId = document.getElementById('itemId').value;

    if (itemId) {
        await updateItem(itemId, itemName);
    } else {
        await createItem(itemName);
    }

    document.getElementById('crudForm').reset();
    document.getElementById('itemId').value = '';
};

async function createItem(name) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });

        if (!response.ok) throw new Error(`Error creating item: ${response.statusText}`);
        const newItem = await response.json();
        items.push(newItem);
        renderItems();
        showSuccess('Item created successfully!');
    } catch (error) {
        showError(error.message);
    }
}

async function updateItem(id, name) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });

        if (!response.ok) throw new Error(`Error updating item: ${response.statusText}`);
        const updatedItem = await response.json();

        const index = items.findIndex(item => item.id === id);
        items[index] = updatedItem;
        renderItems();
        showSuccess('Item updated successfully!');
    } catch (error) {
        showError(error.message);
    }
}

async function deleteItem(id, index) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error(`Error deleting item: ${response.statusText}`);

        items.splice(index, 1);
        renderItems();
        showSuccess('Item deleted successfully!');
    } catch (error) {
        showError(error.message);
    }
}

function editItem(id, name) {
    document.getElementById('itemName').value = name;
    document.getElementById('itemId').value = id;
}

function showSuccess(message) {
    statusMessage.textContent = message;
    statusMessage.className = 'success';
}

function showError(message) {
    statusMessage.textContent = message;
    statusMessage.className = 'error';
}
