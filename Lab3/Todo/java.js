let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task !== "") {
        tasks.push({ name: task, done: false });
        taskInput.value = "";
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.onchange = () => {
            tasks[index].done = checkbox.checked;
            renderTasks();
        };
        const label = document.createElement("label");
        label.textContent = task.name;
        li.appendChild(checkbox);
        li.appendChild(label);
        taskList.appendChild(li);
    });
}

function markAsDone() {
    tasks.forEach(task => {
        if (task.done) {
            task.name = "[DONE] " + task.name;
        }
    });
    renderTasks();
}

function deleteTask() {
    tasks = tasks.filter(task => !task.done);
    renderTasks();
}

renderTasks();
