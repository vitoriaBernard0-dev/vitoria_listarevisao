//  Vitória Karoline de Carvalho Bernardo
document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('task-form').addEventListener('submit', addTask);
document.getElementById('task-list').addEventListener('click', manageTasks);

function addTask(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText === '') return;

    const task = {
        text: taskText,
        completed: false
    };

    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = '';

    renderTasks();
}

function loadTasks() {
    renderTasks();
}

function renderTasks() {
    const tasks = getTasksFromLocalStorage();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="complete-btn" data-index="${index}">Concluir</button>
                <button class="delete-btn" data-index="${index}">Remover</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function manageTasks(e) {
    const index = e.target.dataset.index;
    if (e.target.classList.contains('complete-btn')) {
        toggleCompleteTask(index);
    } else if (e.target.classList.contains('delete-btn')) {
        removeTask(index);
    }
}

function toggleCompleteTask(index) {
    const tasks = getTasksFromLocalStorage();
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function removeTask(index) {
    const tasks = getTasksFromLocalStorage();
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function getTasksFromLocalStorage() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}
