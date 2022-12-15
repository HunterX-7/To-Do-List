let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Elements

const table = document.getElementById('table-body');
const form = document.getElementById('toDoForm');
const addToList = document.getElementById('addToList');

// Add To Do

function addToDo() {
  const task = addToList.value;

  todos.push({
    description: task,
    completed: false,
    index: todos.length + 1,
  });
  addToList.value = '';
}

// Update To Do List

function updateToDo() {
  for (let i = 0; i < todos.length; i += 1) {
    todos[i].index = i + 1;
  }
}

// Display To Do List

function displayToDo() {
  table.innerHTML = '';
  todos.forEach((todo, index) => {
    table.innerHTML += `
        <tr class="todo" id="${index}">
          <td>
              <p>
              <i class="${todo.completed ? 'fa-regular fa-square-check' : 'fa-regular fa-square'}" data-attribute="check"></i>
              <input id="edit${index}" type="text" class="edit" value="${todo.description}" readonly data-attribute="edit">
              </p>
          </td>
          <td class="iAlign"><span><i class="fa-solid fa-trash" data-attribute="remove"></i></span></td>
        </tr>
    `;
  });
}

// Edit To Do List

function editToDo(todoId) {
  const row = document.getElementById(todoId);
  const input = document.getElementById(`edit${todoId}`);
  row.classList.add('highlight');
  input.removeAttribute('readonly');
  input.focus();
  input.addEventListener('blur', () => {
    row.classList.remove('highlight');
    input.setAttribute('readonly', true);
    todos[todoId].description = input.value;
    displayToDo();
    localStorage.setItem('todos', JSON.stringify(todos));
  });
}

// Remove To Do

function removeToDo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  updateToDo();
  displayToDo();
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Event Listeners

table.addEventListener('click', (e) => {
  const { target } = e;
  const targetElement = target.parentElement.parentElement.parentElement;
  if (targetElement.className !== 'todo') return;

  // toDoId
  const todo = targetElement;
  const todoId = Number(todo.id);

  // target
  const { attribute } = target.dataset;

  if (attribute === 'edit' && editToDo(todoId));
  if (attribute === 'remove' && removeToDo(todoId));
});

// Form Submit

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addToDo();
  displayToDo();
  localStorage.setItem('todos', JSON.stringify(todos));
});

export default displayToDo;