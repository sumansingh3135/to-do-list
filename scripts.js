// Get DOM elements
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task when button is clicked
addTaskButton.addEventListener('click', addTask);

// Add task when pressing Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent empty task
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task item <li>
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    // Task text
    const taskName = document.createElement('span');
    taskName.textContent = taskText;

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Append elements
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskName);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
}
