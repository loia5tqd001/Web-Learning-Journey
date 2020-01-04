// html elements
const input = document.getElementById('input');
const buttonLoad = document.getElementById('button-load');
const buttonAdd = document.getElementById('button-add');
const buttonSave = document.getElementById('button-save');
const htmlList = document.getElementById('todo-list');

// constants
const draftInput = 'draft-input';
const draftTodolist = 'draft-todolist';
const apiServer = 'http://localhost:9095/todos';

// global variables
let todoList = [];

// event listeners adding
buttonLoad.addEventListener('click', loadFromCloud);
buttonAdd.addEventListener('click', addTaskToList);
buttonSave.addEventListener('click', saveToCloud);
htmlList.addEventListener('click', removeTaskFromList);
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTaskToList();
    }
});
input.addEventListener('change', saveDraftInput);

// main function
main();
function main() {
    input.value = sessionStorage.getItem(draftInput);
    const stringData = localStorage.getItem(draftTodolist);
    if (stringData !== null) {
        todoList = JSON.parse(stringData);
    }
    render();
}

// function declarations
function addTaskToList() {
    if (input.value.replace(/\s+/g, '') === '') return;
    todoList.push(input.value);
    input.value = '';
    render();
    saveToLocal();
    saveDraftInput();
}

function removeTaskFromList(e) {
    if (e.target.textContent != 'X') return;
    const buttonDelete = e.target;
    const taskId = buttonDelete.dataset.id;
    todoList.splice(taskId, 1);
    render();
    saveToLocal();
    saveDraftInput();
}

function saveDraftInput() {
    sessionStorage.setItem(draftInput, input.value);
}

function saveToLocal() {
    localStorage.setItem(draftTodolist, JSON.stringify(todoList));
}

async function saveToCloud() { 
    await axios.get(apiServer)
    .then(res => {
        const toDelete = apiServer + '/' + res.data.id; 
        axios.delete(toDelete);
    })

    let i = 0;
    todoList.forEach(async task => {
        await axios.post('http://localhost:9095/todos', {
            id: i++,
            content: task
        });
    })
}

function loadFromCloud() {
    axios.get(apiServer)
    .then((res) => {
        todoList = res.data.map((record) => {
            return record.content; 
        });
        render();
        saveToLocal();
    });
}

function render() {
    const liS = todoList.map((task) => {
        return `<li>${task} <button data-id=${todoList.indexOf(task)}>X</button></li>`;
    });
    htmlList.innerHTML = liS.join('');
}