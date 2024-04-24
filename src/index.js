document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const myInputField = document.getElementById('new-task-description');
    const taskDescription = myInputField.value;

    // Create a new task item
    const newTask = document.createElement('li');
    newTask.textContent = taskDescription;

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-button');

    // Append the delete button to the task item
    newTask.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    myInputField.value = '';
  });

  // Event delegation to handle delete button clicks
  taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
      event.target.closest('li').remove();
    }
  });
});
