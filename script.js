// Add task function
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add complete and delete buttons
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = function() {
        li.classList.toggle('completed');
    };
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
    taskInput.value = ''; // Clear the input field
}
