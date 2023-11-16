
const list = [];

function add() {
    const inputTask = document.getElementById("write");
    const taskItem = inputTask.value.trim();
    if (taskItem !== '') {
        list.push({ task: taskItem, checked: false });
        inputTask.value = '';
        displayList();
    }
}

function displayList(filter = 'all') {
    const toDoList = document.getElementById("toDoList");
    toDoList.innerHTML = '';

    list.forEach(function (item) {
        if (filter === 'all' || (filter === 'done' && item.checked) || (filter === 'progress' && !item.checked)) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(item.task));
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.checked = item.checked;
            checkbox.style.margin   = "10px";
            checkbox.addEventListener('change', function () {
                item.checked = checkbox.checked;
                displayList(filter);
            });
            li.appendChild(checkbox);
            toDoList.appendChild(li);
        }
    });
}

function filterTasks(filter) {
    displayList(filter);
}


