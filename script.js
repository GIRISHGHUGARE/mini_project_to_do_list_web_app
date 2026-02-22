const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a task
function addTask() {
    const taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create the list item (li)
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Click on text to toggle 'completed' class
    li.querySelector('span').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Click delete button to remove task
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    todoList.appendChild(li);
    input.value = ""; // Clear input
}

// Event Listeners
addBtn.addEventListener('click', addTask);

// Allow "Enter" key to add task
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});