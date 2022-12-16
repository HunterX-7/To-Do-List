let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Elements

const table = document.getElementById('table-body');
const form = document.getElementById('toDoForm');
const addToList = document.getElementById('addToList');
const button = document.getElementById('btn');

// Add To Do

const addToDo = () => {
  const task = addToList.value;

  todos.push({
    description: task,
    completed: false,
    index: todos.length + 1,
  });
  addToList.value = '';
};

// Update To Do List

const updateToDo = () => {
  for (let i = 0; i < todos.length; i += 1) {
    todos[i].index = i + 1;
  }
};

// Display To Do List

const displayToDo = () => {
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
};

// Check To Do

const checkToDo = (todoId) => {
  todos = todos.map((todo, index) => {
    if (index === todoId) {
      return {
        description: todo.description,
        completed: !todo.completed,
        index: todo.index,
      };
    }

    return {
      description: todo.description,
      completed: todo.completed,
      index: todo.index,
    };
  });
  displayToDo();
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Edit To Do List

const editToDo = (todoId) => {
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
};

// Remove To Do

const removeToDo = (todoId) => {
  todos = todos.filter((todo, index) => index !== todoId);
  updateToDo();
  displayToDo();
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Clear all

button.addEventListener('click', () => {
  todos = todos.filter((todo) => todo.completed === false);
  updateToDo();
  displayToDo();
  localStorage.setItem('todos', JSON.stringify(todos));
});

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

  if (attribute === 'check' && checkToDo(todoId));
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