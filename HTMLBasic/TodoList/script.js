const input = document.getElementById('input');
const buttonAdd = document.getElementById('button-add');
const buttonSave = document.getElementById('button-save');
const htmlList = document.getElementById('todo-list');
const todoList = [];

buttonAdd.addEventListener('click', addTaskToList);
htmlList.addEventListener('click', removeTaskFromList);
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTaskToList();
    }
});

function addTaskToList() {
    if (input.value.replace(/\s+/g, '') === '') return;
    todoList.push(input.value);
    input.value = '';
    render();
}

function removeTaskFromList(e) {
    if (e.target.textContent != 'X') return;
    const buttonDelete = e.target;
    const taskId = buttonDelete.dataset.id;
    todoList.splice(taskId, 1);
    render();
}

function render() {
    if (todoList.length === 0) return;
    const liS = todoList.map((task) => {
        return `<li>${task} <button data-id=${todoList.indexOf(task)}>X</button></li>`;
    });
    htmlList.innerHTML = liS.join('');
}

