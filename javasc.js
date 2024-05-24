document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById('taskInput');

    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        addTask();
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('deleteButton');
            deleteButton.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInput.value = '';
            taskInput.focus();
        }
    }
});